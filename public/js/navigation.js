// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunc()};

// Get the navbar
var navbar = document.getElementById("navbar");
var menu = $('.main');
//var navHamburgerContainter= $('#site-nav-hamberger-open');
var navHamburgerContent= $('.site-nav-open');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    menu.addClass('addTopMargin');
    navHamburgerContent.addClass('addTopPosition');

  } else {
    navbar.classList.remove("sticky");
    menu.removeClass('addTopMargin');
    navHamburgerContent.removeClass('addTopPosition');
  }
}

$('.menu-toggle').click(function() {




  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  $('.site-nav-open').toggleClass('site-nav-show', 100);
/*
  $('.site-nav-open').toggleClass('site-nav-show', 100);
*/


})

$('#home-nav-content').mouseenter(function(){
  console.log('enter');
    $('#home-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#home-nav-content').mouseleave(function(){
  console.log('leave');
    $('#home-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#menu-nav-content').mouseenter(function(){
  console.log('enter');
    $('#menu-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#menu-nav-content').mouseleave(function(){
  console.log('leave');
    $('#menu-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#gallery-nav-content').mouseenter(function(){
  console.log('enter');
    $('#gallery-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#gallery-nav-content').mouseleave(function(){
  console.log('leave');
    $('#gallery-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#about-nav-content').mouseenter(function(){
  console.log('enter');
    $('#about-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#about-nav-content').mouseleave(function(){
  console.log('leave');
    $('#about-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#contact-nav-content').mouseenter(function(){
  console.log('enter');
    $('#contact-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#contact-nav-content').mouseleave(function(){
  console.log('leave');
    $('#contact-nav-content .nav-bar').removeClass('nav-down-bar-active');

});
