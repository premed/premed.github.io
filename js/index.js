$( ".navbar-toggle" ).click(function() {
  $('.topbar').toggleClass( "fadeaway" );
  $('.topbar').toggleClass( "fadein" );
  $(".middlebar").toggleClass( "tiltup" );
  $(".middlebar").toggleClass( "tiltdown" );
  $(".bottombar").toggleClass( "twistleft" );
  $(".bottombar").toggleClass( "twistright" );
});



$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});