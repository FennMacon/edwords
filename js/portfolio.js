$(document).ready(function(){
	$( ".btn" ).click(function(){
		$( ".section" ).removeClass("is-active");
		$( ".btn" ).removeClass("btn-active");
	});
	$( "#aButton" ).click(function(){
		$( "#prompt1" ).toggleClass("is-active");
		$( "#aButton" ).toggleClass("btn-active");
	});
	$( "#bButton" ).click(function(){
		$( "#prompt2" ).toggleClass("is-active");
		$( "#bButton" ).toggleClass("btn-active");
	});
	$( "#cButton" ).click(function(){
		$( "#prompt3" ).toggleClass("is-active");
		$( "#cButton" ).toggleClass("btn-active");
	});
	$( "#dButton" ).click(function(){
		$( "#prompt4" ).toggleClass("is-active");
		$( "#dButton" ).toggleClass("btn-active");
	});		
	$( "#eButton" ).click(function(){
		$( "#prompt5" ).toggleClass("is-active");
		$( "#eButton" ).toggleClass("btn-active");
	});		
	$(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
	});
});