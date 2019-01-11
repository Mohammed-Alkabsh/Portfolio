//Initializing Particles
particlesJS("mainCanvas", {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#f3f7f8"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#f3f7f8"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#f3f7f8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

var doc = $(document);
doc.on("scroll", function(){
  console.log(screen.width);
  console.log(doc.scrollTop());
  if ( screen.width <= 600 ){
    console.log("small screen");
    if ( doc.scrollTop() >= 180){
      $(".about-header").removeClass("disappear").addClass("fadeInLeftBig");
    }
    if (doc.scrollTop() >= 250){
      $(".about-header").siblings().removeClass("disappear").addClass("fadeInLeftBig");
    }
    if (doc.scrollTop() >= 350){
      $(".card-images").removeClass("disappear").addClass("flipInY");
    }
    if (doc.scrollTop() >= 450){
      $(".card-images").siblings().removeClass("disappear").addClass("flipInX");
    }
    if (doc.scrollTop() >= 900){
      $(".bio-cont").removeClass("disappear").addClass("slideInLeft");
    }
    if (doc.scrollTop() >= 1000){
      $(".sarcasm").removeClass("disappear").addClass("bounceInDown");
    }
    if (doc.scrollTop() >= 1150){
      $(".my-disc").removeClass("disappear").addClass("bounceIn");
    }
    
    
    
    if (doc.scrollTop() >= 1400){
      $(".stats-cont").removeClass("disappear").addClass("slideInRight");
      
      $("#html-progress").css("width", "90%").siblings(".percentage").children().text("90%");
      $("#css-progress").css("width", "80%").siblings(".percentage").children().text("80%");
      $("#javascript-progress").css("width", "68%").siblings(".percentage").children().text("68%");
      $("#bootstrap-progress").css("width", "40%").siblings(".percentage").children().text("40%");
      $("#jquery-progress").css("width", "77%").siblings(".percentage").children().text("77%");
      $("#node-progress").css("width", "65%").siblings(".percentage").children().text("65%");
      $("#express-progress").css("width", "78%").siblings(".percentage").children().text("78%");
      $("#mongodb-progress").css("width", "74%").siblings(".percentage").children().text("74%");
      $("#git-progress").css("width", "59%").siblings(".percentage").children().text("59%");
    }
    if( doc.scrollTop() >= 1950 ){
      $(".projects-header").removeClass("disappear").addClass("fadeInRightBig");
    }
    if( doc.scrollTop() >= 2050 ){
      $(".projects-header").siblings().removeClass("disappear").addClass("fadeInRightBig");
    }
    if( doc.scrollTop() >= 2150 ){
      $(".yelpcamp-image").removeClass("disappear").addClass("fadeInUp");
    }
    if( doc.scrollTop() >= 2700 ){
      $(".contact-header").removeClass("disappear").addClass("fadeInLeftBig");
    }
    if( doc.scrollTop() >= 2770 ){
      $(".contact-header").siblings().removeClass("disappear").addClass("fadeInRightBig");
    }
    if( doc.scrollTop() >= 2900 ){
      $(".have-a-question").removeClass("disappear").addClass("fadeInLeftBig");
    }
    if( doc.scrollTop() >= 3000 ){
      $("form").removeClass("disappear").addClass("jackInTheBox");
    }
    
    
    
    
    
    
  }else{
    
    if ( doc.scrollTop() >= 300){
        $(".about-header").removeClass("disappear").addClass("fadeInLeftBig");
    }
    if (doc.scrollTop() >= 450){
      $(".about-header").siblings().removeClass("disappear").addClass("fadeInLeftBig");
    }
    if (doc.scrollTop() >= 550){
      $(".card-images").removeClass("disappear").addClass("flipInY");
    }
    if (doc.scrollTop() >= 650){
      $(".card-images").siblings().removeClass("disappear").addClass("flipInX");
    }
    if (doc.scrollTop() >= 750){
      $(".bio-cont").removeClass("disappear").addClass("slideInLeft");
    }
    if (doc.scrollTop() >= 1050){
      $(".sarcasm").removeClass("disappear").addClass("bounceInDown");
    }
    if (doc.scrollTop() >= 1120){
      $(".my-disc").removeClass("disappear").addClass("bounceIn");
    }
    if (doc.scrollTop() >= 750){
      $(".stats-cont").removeClass("disappear").addClass("slideInRight");
      
      $("#html-progress").css("width", "90%").siblings(".percentage").children().text("90%");
      $("#css-progress").css("width", "80%").siblings(".percentage").children().text("80%");
      $("#javascript-progress").css("width", "68%").siblings(".percentage").children().text("68%");
      $("#bootstrap-progress").css("width", "40%").siblings(".percentage").children().text("40%");
      $("#jquery-progress").css("width", "77%").siblings(".percentage").children().text("77%");
      $("#node-progress").css("width", "65%").siblings(".percentage").children().text("65%");
      $("#express-progress").css("width", "78%").siblings(".percentage").children().text("78%");
      $("#mongodb-progress").css("width", "74%").siblings(".percentage").children().text("74%");
      $("#git-progress").css("width", "59%").siblings(".percentage").children().text("59%");
    }
    if( doc.scrollTop() >= 1550 ){
      $(".projects-header").removeClass("disappear").addClass("fadeInRightBig");
    }
    if( doc.scrollTop() >= 1650 ){
      $(".projects-header").siblings().removeClass("disappear").addClass("fadeInRightBig");
    }
    if( doc.scrollTop() >= 1720 ){
      $(".yelpcamp-image").removeClass("disappear").addClass("fadeInUp");
    }
    if( doc.scrollTop() >= 2200 ){
      $(".contact-header").removeClass("disappear").addClass("fadeInLeftBig");
    }
    if( doc.scrollTop() >= 2320 ){
      $(".contact-header").siblings().removeClass("disappear").addClass("fadeInRightBig");
    }
    if( doc.scrollTop() >= 2400 ){
      $(".have-a-question").removeClass("disappear").addClass("fadeInLeftBig");
    }
    if( doc.scrollTop() >= 2550 ){
      $("form").removeClass("disappear").addClass("jackInTheBox");
    }
  }
});

//Adding smooth scrolling
var scrollLink = $(".nav-link");

scrollLink.on("click", function(e){
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $(this.hash).offset().top
  }, 1000);
});
$(".view-work-button").on("click", function(e){
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $(this.hash).offset().top + 30
  }, 800);
});
$(".footer-to-home-button").on("click", function(e){
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $(this.hash).offset().top
  }, 800);
});
$(window).on("scroll", function(){
  var scrollBarLocation = $(this).scrollTop();
  scrollLink.each(function(){
    var sectionOffset = $(this.hash).offset().top - 50;
    if (sectionOffset <= scrollBarLocation){
      $(this).parent().siblings().removeClass("active");
      $(this).parent().addClass("active");
    }
  });
});

$(".project").on("mouseenter", function(){
  $(this).children().css({
    "height": "50%",
    "opacity": "1"
  });
});
$(".project").on("mouseleave", function(){
  $(".project").children().css({
    "height": "0",
    "opacity": "0"
  });
});
