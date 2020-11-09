@@include('_jquery-2.2.4.min.js');

$(document).ready(function(){

  // Go to ancor
  $('a').click(function () {
    let target  = $(this).attr('href'),
        top = $(target).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });

  // hamburger menu
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

});