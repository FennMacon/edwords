$(document).ready(function() {
    $("#msc_letter").hide();
    $("#msc_insert").hide();
    $("#msc_toque").hide();
    $("#msc_reply").hide();
    $("#l1").click(function() {    
            $("#headline").text("Finding the sweet spot.");
            $("#p1").text("People make decisions for emotional reasons. Human beings respond better to stories, rather than facts. That’s why I believe that, if you want to sell something to someone, tell them a story. A problem with a solution. A benefit they personally feel. These stories are not easy to identify, or to credibly express. But finding where what your product does dovetails with why the consumer cares is the key to effective marketing.");
            $("#p2").text("");
            $("#p3").text("");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("LL Bean");
            $("#example > div > p").text("LL Bean is one of the most beloved brands in the world. These ads reinforce Bean’s connection to the outdoors, and to values that are traditional, respected and very Maine-like.");
            $("#eximg1").attr("src", "http://edwordscreative.com/Portfolio_-_Bean_files/llbean1.jpg");
            $("#eximg2").attr("src", "http://edwordscreative.com/Portfolio_-_Bean_files/llbean2.jpg");
            $("#eximg3").attr("src", "http://edwordscreative.com/Portfolio_-_Bean_files/llbean3.jpg");
            $("#eximg4").attr("src", "");
        });
    $("#l2").click(function() {    
            $("#headline").text("\“Brand advertising that pays for itself.\”");
            $("#p1").text("I cut my teeth in direct marketing, a medium generally reviled by brand-conscious marketers, because they (often rightly) think that tacky DR harms their brand (while still being effective and thus hard to kill).");
            $("#p2").text("At Hill Holliday, I was told to do direct \“that didn’t suck.\” I discovered that branding and DR are actually two sides of the same coin … that when the branding is emotionally rich, it generates response.");
            $("#p3").text("");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("Scudder");
            $("#example > div > p").text("A high impact series that invested an entire year’s marketing budget in one direct mail campaign. Generated millions in business, reeled in two clients that were larger than any previous client, and won the New England Direct Marketing Association’s \“Best of Show\” award.");
            $("#eximg1").attr("src", "http://edwordscreative.com/Portfolio_-_Scudder_hats_files/scudderhat.jpg");    
            $("#eximg2").attr("src", "");
            $("#eximg3").attr("src", "");
            $("#eximg4").attr("src", "");   
        });
    $("#l3").click(function() {    
            $("#headline").text("Mapping your brand");
            $("#p1").text("The power of a brand is nearly incalculable. Every business, large or small, needs to define, articulate and promote their brand.");
            $("#p2").text("I work with clients to develop their brand, using a disciplined yet flexible plan revolving around differentiators and core messages. The result is a Brand Map – a document that both supplies content for all consumer-facing materials, and serves as a measuring stick for the future.");
            $("#p3").text("My Brand Maps include messages for ALL your audiences, to ALL your interactions powerful, differentiating and memorable.");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("The New England Journal of Medicine");
            $("#example > div > p").text("Designed to re-connect today’s physician with the New England Journal of Medicine, this campaign unites the Journal’s values with those of physicians. Its visual style places the reader in the ad’s story and signs off with a reader-centric tag line – Never Stop Learning.");
            $("#eximg1").attr("src", "http://edwordscreative.com/Portfolio_-_NEJM_ads_files/Integrity.jpg");   
            $("#eximg2").attr("src", "http://edwordscreative.com/Portfolio_-_NEJM_ads_files/care.jpg");
            $("#eximg3").attr("src", "http://edwordscreative.com/Portfolio_-_NEJM_ads_files/Commitment.jpg");
            $("#eximg4").attr("src", "");         
        });
    $("#l4").click(function() {    
            $("#headline").text("Why do people give away money?");
            $("#p1").text("Fundraising is unique -- the donor is asked to spend money on something that yields no tangible or immediate benefit. Or so it seems. In reality, fundraising is most effective when it uncovers the core benefit that motivates contributions (not just “we need the money”).");
            $("#p2").text("The key is to understand the the real reasons that people give. I have found that stories work best. The truth is, donors don’t care that much about your organization … they care about their money helping people.");
            $("#p3").text("");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("LowellWorks");
            $("#example > div > p").text("These posters were a collaboration among 38 non-profit groups in Lowell, MA. I named the group, wrote 20 posters, and arranged for pro bono photograph and design. I was honored at a press conference with the mayor of Lowell and received a special award for the work.");
            $("#eximg1").attr("src", "http://edwordscreative.com/Portfolio_-_Lowellworks_posters_files/Mirror%20poster.jpg");    
            $("#eximg2").attr("src", "http://edwordscreative.com/Portfolio_-_Lowellworks_posters_files/Joy%20poster.jpg");
            $("#eximg3").attr("src", "http://edwordscreative.com/Portfolio_-_Lowellworks_posters_files/Tricia%20poster.jpg");
            $("#eximg4").attr("src", "http://edwordscreative.com/Portfolio_-_Lowellworks_posters_files/Tran%20poster.jpg");    
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
});