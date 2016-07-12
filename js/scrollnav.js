$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#fullpage');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
		$( "#nb" ).removeClass("noscroll");
		$( "#nb" ).addClass("scroll");
		$( "#active" ).removeClass("active-noscroll");
		$( "#active" ).addClass("active-scroll");
		$( "#top_btn" ).removeClass("btn-noscroll");
		$( "#top_btn" ).addClass("btn-scroll");
       } else {
		$( "#nb" ).addClass("noscroll");
		$( "#nb" ).removeClass("scroll");
		$( "#active" ).addClass("active-noscroll");
		$( "#active" ).removeClass("active-scroll");
		$( "#top_btn" ).removeClass("btn-scroll");
		$( "#top_btn" ).addClass("btn-noscroll");
       }
   });
    };
   $(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
	});

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 55
	        }, 1200);
	        return false;
	      }
	    }
	  });
	});
});