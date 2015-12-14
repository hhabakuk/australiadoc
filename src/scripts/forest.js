$(window).on('scroll', function() {
  // body...

  var $scrolled = $(window).scrollTop(); /*number indicating where in the window our scroll is */
  console.log($scrolled)


  var $background = $('.bg');
  $background.css('top', ($scrolled * -1) + 'px'); /**/

  var $koala = $('.top-left');
  $koala.css('transform', 'skewY(' + $scrolled + 'deg)');

  var $koala2 = $('.top-center');
  $koala2.css('right', ($scrolled * -1) + 'px').css('z-index',($scrolled * -1));

  var $koala3 = $('.top-right');
  $koala3.css('top', ($scrolled * 0.5) + 'px');

   var $puppy = $('.bottom-left');
   $puppy.css('left', ($scrolled * 0.5) + 'px');
  

  var $puppy2 = $('.bottom-center');
  $puppy2.css('right', ($scrolled * 2.5) + 'px');

  var $puppy3 = $('.bottom-right');
  $puppy3.css('top', ($scrolled * (-5)+ 'px'));
  



});