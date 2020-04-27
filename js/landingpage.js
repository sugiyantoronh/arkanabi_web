// HEADER ANIMATION
window.onscroll = function() {scrollFunction()};
var element = document.getElementById("body");
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}

// OWL-CAROUSAL
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    nav:false,
    dot:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// SCROLLSPY
$(document).ready(function() {
  $(".nav-link").click(function() {
      var t = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(t).offset().top - 75
      }, {
          duration: 1000,
      });
      // $('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
      return false;
  });
  
});

// AOS
AOS.init({
    offset: 120, 
    delay: 200,
    duration: 2400, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
    disable: "mobile"
  });

//SIDEBAR-OPEN
  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").removeClass("sidebar-open");
  })

  $('#navbarSupportedContent').on('shown.bs.collapse', function () {
    $("body").addClass("sidebar-open");
  })


  window.onresize = function() {
    var w = window.innerWidth;
    if(w>=992) {
      $('body').removeClass('sidebar-open');
      $('#navbarSupportedContent').removeClass('show');
    }
  }

  $(".nav-tabs a").click(function(){
    $(this).tab('show');
   
  });
  $('.nav-tabs a').on('hidden.bs.tab', function(){
    $('.dashboard-title , .dashboard-summary, .dashboard-btn ').transition({ x: -40, duration: 0 });
    $('.dashboard-img').transition({ x: 40, duration: 0 });
  });
  $('.nav-tabs a').on('shown.bs.tab', function(e){
    $('.dashboard-title , .dashboard-summary, .dashboard-btn ').transition({ x: 40, duration : 1000});
    $('.dashboard-img').transition({ x: -40, duration: 1000 });
  });
