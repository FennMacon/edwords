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

	$( ".pb" ).click(function(){
		$( ".black" ).removeClass("is-active");
	});

	$( "#p1b" ).click(function(){
		$( "#p1" ).toggleClass("is-active");
	});	
	$( "#p2b" ).click(function(){
		$( "#p2" ).toggleClass("is-active");
	});
	$( "#p3b" ).click(function(){
		$( "#p3" ).toggleClass("is-active");
	});	
	$( "#p4b" ).click(function(){
		$( "#p4" ).toggleClass("is-active");
	});
	$( "#p5b" ).click(function(){
		$( "#p5" ).toggleClass("is-active");
	});	
	$( "#p6b" ).click(function(){
		$( "#p6" ).toggleClass("is-active");
	});
	$( "#p7b" ).click(function(){
		$( "#p7" ).toggleClass("is-active");
	});

	$( "#dm1b" ).click(function(){
		$( "#dm1" ).toggleClass("is-active");
	});	
	$( "#dm2b" ).click(function(){
		$( "#dm2" ).toggleClass("is-active");
	});
	$( "#dm3b" ).click(function(){
		$( "#dm3" ).toggleClass("is-active");
	});	
	$( "#dm4b" ).click(function(){
		$( "#dm4" ).toggleClass("is-active");
	});
	$( "#dm5b" ).click(function(){
		$( "#dm5" ).toggleClass("is-active");
	    $("#msc_letter").hide();
		$("#msc_insert").hide();
	    $("#msc_toque").hide();
	    $("#msc_reply").hide();
	});	

	$( "#o1b" ).click(function(){
		$( "#o1" ).toggleClass("is-active");
	});	
	$( "#o2b" ).click(function(){
		$( "#o2" ).toggleClass("is-active");
	});
	$( "#o3b" ).click(function(){
		$( "#o3" ).toggleClass("is-active");
	});	
	$( "#o4b" ).click(function(){
		$( "#o4" ).toggleClass("is-active");
	});
	$( "#o5b" ).click(function(){
		$( "#o5" ).toggleClass("is-active");
	});

	$( "#b1b" ).click(function(){
		$( "#b1" ).toggleClass("is-active");
	});	
	$( "#b2b" ).click(function(){
		$( "#b2" ).toggleClass("is-active");
	});
	$( "#b3b" ).click(function(){
		$( "#b3" ).toggleClass("is-active");
	});	
	$( "#b4b" ).click(function(){
		$( "#b4" ).toggleClass("is-active");
	});
	$( "#b5b" ).click(function(){
		$( "#b5" ).toggleClass("is-active");
	});

	$( "#om1b" ).click(function(){
		$( "#om1" ).toggleClass("is-active");
	    $("#mpf").hide();
	    $("#mpfr").hide();
		$("#mpr").hide();
	    $("#mprl").hide();
		$("#mprr").hide();
	});	
	$( "#om2b" ).click(function(){
		$( "#om2" ).toggleClass("is-active");
	});
	$( "#om3b" ).click(function(){
		$( "#om3" ).toggleClass("is-active");
	});		
	$( "#om4b" ).click(function(){
		$( "#om4" ).toggleClass("is-active");
	});
	$( "#om5b" ).click(function(){
		$( "#om5" ).toggleClass("is-active");
		$("#or3").hide();
	    $("#or4").hide();
	    $("#or5").hide();
	    $("#or6").hide();
		$("#or7").hide();
	    $("#or8").hide();
	    $("#or9").hide();
	    $("#or10").hide();
	});

    $("#msc_env").click(function() {
            $("#msc_env").fadeOut(1000);
            $("#msc_letter").fadeIn(1500);
        });
    $("#msc_letter").click(function() {
            $("#msc_letter").fadeOut(1000);
            $("#msc_insert").fadeIn(1500);
        });
    $("#msc_insert").click(function() {
            $("#msc_insert").fadeOut(1000);
            $("#msc_toque").fadeIn(1500);
        });
    $("#msc_toque").click(function() {
            $("#msc_toque").fadeOut(1000);
            $("#msc_reply").fadeIn(1500);
        });
    $("#msc_reply").click(function() {
            $("#msc_reply").fadeOut(1000);
            $("#msc_env").fadeIn(1500);
        });

     $("#mpfl").click(function() {
            $("#mpfl").fadeOut(1000);
            $("#mpfr").fadeIn(1500);
        });     
     $("#mpfr").click(function() {
            $("#mpfr").fadeOut(1000);
            $("#mpf").fadeIn(1500);
        });
     $("#mpf").click(function() {
            $("#mpf").fadeOut(1000);
            $("#mpr").fadeIn(1500);
        });     
     $("#mpr").click(function() {
            $("#mpr").fadeOut(1000);
            $("#mprl").fadeIn(1500);
        });
     $("#mprl").click(function() {
            $("#mprl").fadeOut(1000);
            $("#mprr").fadeIn(1500);
        });
     $("#mprr").click(function() {
            $("#mprr").fadeOut(1000);
            $("#mpfl").fadeIn(1500);
        });


    $("#or1").click(function() {
            $("#or1").fadeOut(1000);
            $("#or2").fadeOut(1000);
            $("#or3").fadeIn(1500);
            $("#or4").fadeIn(1500);
        });
    $("#or2").click(function() {
            $("#or1").fadeOut(1000);
            $("#or2").fadeOut(1000);
            $("#or3").fadeIn(1500);
            $("#or4").fadeIn(1500);
        });
    $("#or3").click(function() {
            $("#or3").fadeOut(1000);
            $("#or4").fadeOut(1000);
            $("#or5").fadeIn(1500);
            $("#or6").fadeIn(1500);
        });
    $("#or4").click(function() {
            $("#or3").fadeOut(1000);
            $("#or4").fadeOut(1000);
            $("#or5").fadeIn(1500);
            $("#or6").fadeIn(1500);
        });
    $("#or5").click(function() {
            $("#or5").fadeOut(1000);
            $("#or6").fadeOut(1000);
            $("#or7").fadeIn(1500);
            $("#or8").fadeIn(1500);
        });
    $("#or6").click(function() {
            $("#or5").fadeOut(1000);
            $("#or6").fadeOut(1000);
            $("#or7").fadeIn(1500);
            $("#or8").fadeIn(1500);
        });
    $("#or7").click(function() {
            $("#or7").fadeOut(1000);
            $("#or8").fadeOut(1000);
            $("#or9").fadeIn(1500);
            $("#or10").fadeIn(1500);
        });
    $("#or8").click(function() {
            $("#or7").fadeOut(1000);
            $("#or8").fadeOut(1000);
            $("#or9").fadeIn(1500);
            $("#or10").fadeIn(1500);
        });
    $("#or9").click(function() {
            $("#or9").fadeOut(1000);
            $("#or10").fadeOut(1000);
            $("#or1").fadeIn(1500);
            $("#or2").fadeIn(1500);
        });
    $("#or10").click(function() {
            $("#or9").fadeOut(1000);
            $("#or10").fadeOut(1000);
            $("#or1").fadeIn(1500);
            $("#or2").fadeIn(1500);
        });    

});