
/*
* Initializes the owl carousel (slideshow)
*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
	    loop:true,
	    items:1,
	    nav:true,
	    navText:["<h2><</h2>","<h2>></h2>"], // html accepted in navText
	    center:true,
		autoHeight:true,
	});
});