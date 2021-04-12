const mongoose = require("mongoose");
const isDev = process.env.NODE_ENV !== "production";
const config = require("../../config/config");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose
  .connect(isDev ? config.db_dev : config.db, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log("db is connected!");
    return res;
  })
  .catch((err) => {
    console.log(Error, err);
    return err;
  });

module.exports.User = require("./User");
module.exports.Message = require("./Message");
module.exports.Home = require("./Home");
module.exports.Project = require("./Project");
module.exports.QualityCard = require("./QualityCard");
module.exports.Skill = require("./Skill");
module.exports.Employer = require("./Employer");
