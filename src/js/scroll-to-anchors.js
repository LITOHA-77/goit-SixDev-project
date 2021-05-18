// $('a[href^="#"]').click(function(){
// var target = $(this).attr('href');
// $('html, body').animate({scrollTop: $(target).offset().top}, 800);
// return false;
// });

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 800, 'linear');
});