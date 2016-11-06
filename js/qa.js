$(document).ready(function() {
    $("#l1").click(function() {    
            $("#headline").text("Finding the sweet spot.");
            $("#p1").text("People make decisions for emotional reasons. Human beings respond better to stories, rather than facts. That’s why I believe that, if you want to sell something to someone, tell them a story. A problem with a solution. A benefit they personally feel. These stories are not easy to identify, or to credibly express. But finding where what your product does dovetails with why the consumer cares is the key to effective marketing.");
            $("#p2").text("");
            $("#p3").text("");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#modalTarget").attr("data-target","#exampleOne");
        });
    $("#l2").click(function() {    
            $("#headline").text("\“Brand advertising that pays for itself.\”");
            $("#p1").text("I cut my teeth in direct marketing, a medium generally reviled by brand-conscious marketers, because they (often rightly) think that tacky DR harms their brand (while still being effective and thus hard to kill).");
            $("#p2").text("At Hill Holliday, I was told to do direct \“that didn’t suck.\” I discovered that branding and DR are actually two sides of the same coin … that when the branding is emotionally rich, it generates response.");
            $("#p3").text("");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#modalTarget").attr("data-target","#exampleTwo");      
        $("#olfl").hide();
        $("#olfm").hide();
        $("#olfr").hide();
        $("#olffull").hide();
        $("#olrl").hide();
        $("#olrm").hide();
        $("#olrr").hide();
        $("#olrfull").hide();     
        });
    $("#l3").click(function() {    
            $("#headline").text("Mapping your brand");
            $("#p1").text("The power of a brand is nearly incalculable. Every business, large or small, needs to define, articulate and promote their brand.");
            $("#p2").text("I work with clients to develop their brand, using a disciplined yet flexible plan revolving around differentiators and core messages. The result is a Brand Map – a document that both supplies content for all consumer-facing materials, and serves as a measuring stick for the future.");
            $("#p3").text("My Brand Maps include messages for ALL your audiences, to ALL your interactions powerful, differentiating and memorable.");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#modalTarget").attr("data-target","#exampleThree");
        });
    $("#l4").click(function() {    
            $("#headline").text("Why do people give away money?");
            $("#p1").text("Fundraising is unique -- the donor is asked to spend money on something that yields no tangible or immediate benefit. Or so it seems. In reality, fundraising is most effective when it uncovers the core benefit that motivates contributions (not just “we need the money”).");
            $("#p2").text("The key is to understand the the real reasons that people give. I have found that stories work best. The truth is, donors don’t care that much about your organization … they care about their money helping people.");
            $("#p3").text("");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#modalTarget").attr("data-target","#exampleFour"); 
        });


     $("#olfmu").click(function() {
            $("#olfmu").fadeOut(0);
            $("#olfr").fadeIn(1500);
        });        
     $("#olfr").click(function() {
            $("#olfr").fadeOut(0);
            $("#olfl").fadeIn(1500);
        });  
     $("#olfl").click(function() {
            $("#olfl").fadeOut(0);
            $("#olrl").fadeIn(1500);
        });
     $("#olrl").click(function() {
            $("#olrl").fadeOut(0);
            $("#olrm").fadeIn(1500);
        });
     $("#olrm").click(function() {
            $("#olrm").fadeOut(0);
            $("#olrr").fadeIn(1500);
        });       
     $("#olrr").click(function() {
            $("#olrr").fadeOut(0);
            $("#olfm").fadeIn(1500);
        }); 
     $("#olfm").click(function() {
            $("#olfm").fadeOut(0);
            $("#olfmu").fadeIn(1500);
        });     

});