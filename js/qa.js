$(document).ready(function() {
    $("#msc_letter").hide();
    $("#msc_insert").hide();
    $("#msc_toque").hide();
    $("#msc_reply").hide();
    $("#l1").click(function() {    
            $("#p1").text("Behind every great product or company is a story. A company’s story forges a powerful connection between the company and its customers.");
            $("#p2").text("There are many ways to tell a company’s story – advertising, web sites, e-mails, personal comments from senior executives.  Consistent themes across all communications builds the brand.");
            $("#p3").text("I believe in getting under the hood of each product, going beyond features and benefits to add context, depth, and perspective.  By building stories about your products and brand, you turn your customers from buyers into believers.");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("Travel Gold");
            $("#example > div > p").text("Canada has excellent health care -- until you leave home. Then you need to buy travel health insurance, to ensure care away from home. This campaign focused on humorous \“near disasters\” to drive home the need for coverage.");
            $("#eximg").attr("src", "http://edwordscreative.com/Portfolio_-_Travel_Gold_files/travelgold_camping.jpg");
        });
    $("#l2").click(function() {
            $("#p1").text("I cut my teeth in direct marketing, a medium generally reviled by brand-conscious marketers, because they (often rightly) think that tacky DR harms their brand (while still being effective and thus hard to kill).");
            $("#p2").text("At Hill Holliday, I was told to do direct \“that didn’t suck.\” I discovered that branding and DR are actually two sides of the same coin … that when the branding is emotionally rich, it generates response.");
            $("#p3").text("Still don’t love DR? Then think of it as \“brand advertising that pays for itself.\”");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("Scudder");
            $("#example > div > p").text("A high impact series that invested an entire year’s marketing budget in one direct mail campaign. Generated millions in business, reeled in two clients that were larger than any previous client, and won the New England Direct Marketing Association’s \“Best of Show\” award.");
            $("#eximg").attr("src", "http://edwordscreative.com/Portfolio_-_Scudder_hats_files/scudderhat.jpg");       
        });
    $("#l3").click(function() {
            $("#p1").text("The power of a brand is nearly incalculable. Every business, large or small, needs to define, articulate and promote their brand.");
            $("#p2").text("I work with clients to develop their brand, using a disciplined yet flexible plan revolving around differentiators and core messages. The result is a document that both supplies content for all consumer-facing materials, and serves as a measuring stick for the future.");
            $("#p3").text("It doesn’t make for a flashy show on a web page. But it does provide messages for ALL your audiences, in ALL your interactions that are powerful, differentiating and memorable.");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("The New England Journal of Medicine");
            $("#example > div > p").text("A branding campaign designed to re-connect today’s physician with the New England Journal of Medicine, one of most venerable and respected medical journals. We united the Journal’s core values with those of physicians, using a visual style to place the reader into the ad’s story, then signed off with a tag line that was as much about the reader as the Journal (Never Stop Learning).");
            $("#eximg").attr("src", "http://edwordscreative.com/Portfolio_-_NEJM_ads_files/Integrity.jpg");            
        });
    $("#l4").click(function() {
            $("#p1").text("Fundraising is unique -- the donor is asked to spend money on something that yields no tangible or immediate benefit. Or so it seems. In reality, fundraising is most effective when it uncovers the core benefit that motivates contributions (not just “we need the money”).");
            $("#p2").text("The key is to understand the the real reasons that people give. Once that connection is established, you can raise more money from more donors without increasing costs.");
            $("#p3").text("I have found that stories work best. The truth is, donors don’t care that much about your organization … they care about their money helping people.");
            $("#ex").removeClass("hidden").addClass("visible");
            $("#a").removeClass("hidden").addClass("visible");
            $("#exwrap").removeClass("hidden").addClass("visible");
            $("#example > div > h1").text("WBUR");
            $("#example > div > p").text("One of dozens of campaigns I created for WBUR’s fundraising. During my time there, we increased the amount raised through the mail by more than TEN times. This campaign illustrated our central theme -- by contributing through the mail, you could drastically reduce on-air fundraising, a benefit that every listener would support.");
            $("#eximg").attr("src", "http://edwordscreative.com/Portfolio_-_WBUR_files/Food_newspaper_IC%201.jpg");        
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