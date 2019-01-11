var express = require("express"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    app = express();
    
//connecting to mongoDB
//mongoose.connect("mongodb://localhost/portfolio", {useNewUrlParser: true});
mongoose.connect("mongodb://Mohammed:DNG06212010@ds253324.mlab.com:53324/portfolio", {useNewUrlParser: true});

app.use(require("express-session")({
    secret: "Don't, hate on a nigga... that is a weak emotion, the lady in a nigga.",
    resave: false,
    saveUninitialized: false
}));

//Customer Schema/Model
var messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: Object
});

var Customer = mongoose.model("Customer", messageSchema);

//OWNER Schema/Model
var ownerSchema = new mongoose.Schema({
    username: String,
    password: String
});

ownerSchema.plugin(passportLocalMongoose);

var Owner = new mongoose.model("Owner", ownerSchema);


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(flash());

//Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(Owner.authenticate()))
passport.serializeUser(Owner.serializeUser());
passport.deserializeUser(Owner.deserializeUser());

//Passing middleware to all templates
app.use(function(req, res, next){
    req.app.locals.error = req.flash("error");
    req.app.locals.success = req.flash("success");
    next();
});


app.get("/", function(req, res){
    res.render("home");
});

app.post("/", function(req, res){
    var name = req.body.name,
        email = req.body.email,
        message = req.body.message,
        today = new Date();
    
    Customer.create({
        name: name,
        email: email,
        message: message,
        date: {
            minute: (today.getMinutes() < 10 ? '0' : '') + today.getMinutes(),
            hour: today.getHours() - 6,
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear()
        }
    }, function(err, customer){
        if(err){
            console.log(err);
        }
        else{
            req.flash("success", "Your message has been sent");
            res.redirect("/");
        }
    });
    
});

//For registering the OWNER
// app.get("/register", function(req, res){
//     res.render("register");
// });

// app.post("/register", function(req, res){
//     Owner.register(new Owner({username: req.body.username}), req.body.password, function(err, user){
//         if (err){
//             console.log(err);
//             res.redirect("register");
//         }
//         else{
//             passport.authenticate("local")(req, res, function(){
//                 res.render("dash")
//             });
//         }
//     });
// });

app.get("/admin", function(req, res){
    res.render("admin");
});


app.post("/admin", passport.authenticate("local", {
    successRedirect: "/dash",
    failureRedirect: "/admin"
}), function(req, res){
});


app.get("/dash", isLoggedIn, function(req, res){
    Owner.find({username: "Mohammed_Alkabsh"}, function(err, owner){
        if (err){
            console.log(err);
            res.redirect("back");
        }
        else{
            Customer.find({}, function(err, customer){
                if(err){
                    console.log(err);
                    res.redirect("back");
                }
                else{
                    res.render("dash", {customer: customer, Owner: owner});
                    
                }
            });
        }
    });
});

//LOGOUT ROUTE
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/admin");
};


//connecting to host
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your app is served!");
});