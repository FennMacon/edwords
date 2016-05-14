$(document).ready(function() {
    $("#left li").click(
        function() {
            $("#question").text(" ").fadeOut('800');
        }
    );

    $("#l1").click(
        function() {
            $("#response").hide().html(" <div class=\"fill\"><p>Behind every great product or company is a story. A company’s story forges a powerful connection between the company and its customers.</p> <p>There are many ways to tell a company’s story – advertising, web sites, e-mails, personal comments from senior executives.  Consistent themes across all communications builds the brand.</p> <p>I believe in getting under the hood of each product, going beyond features and benefits to add context, depth, and perspective.  By building stories about your products and brand, you turn your customers from buyers into believers.</p></div> ").fadeIn('800');
            $("#port").removeClass("p-hidden").addClass("p-visible");
            $("#e1 > h3").text("Thos. Moser Cabinetmakers");
            $("#e1 > p ").text("Consumers purchase Thos. Moser furniture for more than the excellence of the product – they respond to the ethic of hand-crafted quality and  workmanship. These ads appeal to that emotional connection.");
            $("#e2 > h3").text("MIT Sloan Management Review");
            $("#e2 > p ").text("A print execution of a yearlong repositioning campaign, this ad highlights MIT’s unique advantage for business audiences -- academic-level concepts applied to real-world problems.");
            $("#e3 > h3").text("Travel Gold");
            $("#e3 > p ").text("Canada has excellent health care -- until you leave home. Then you need to buy travel health insurance, to ensure care away from home. This campaign focused on humorous “near disasters” to drive home the need for coverage.");
            $("#e4 > h3").text("LL Bean");
            $("#e4 > p ").text("LL Bean is one of the most beloved brands in the world.  These ads reinforce Bean’s connection to the outdoors, and to values that are traditional, respected and very Maine-like.");
        });
    $("#l2").click(function() {
            $("#response").hide().html(" <div class=\"fill\"><p>I cut my teeth in direct marketing, a medium generally reviled by brand-conscious marketers, because they (often rightly) think that tacky DR harms their brand (while still being effective and thus hard to kill.</p> <p>At Hill Holliday, I was told to do direct \“that didn’t suck.\” I discovered that branding and DR are actually two sides of the same coin … that when the branding is emotionally rich, it generates response.</p> <p>Still don’t love DR? Then think of it as \“brand advertising that pays for itself.\”</p></div> ").fadeIn('800');
            $("#port").removeClass("p-hidden").addClass("p-visible");
            $("#e1 > h3").text("Authentica");
            $("#e1 > p ").text("This company makes a product for those horrible moments when you realize you’ve sent an email that you’d like to have back. We used classic pieces of art to make a bad situation entertaining, while still dramatizing the product benefit.");
            $("#e2 > h3").text("Wellesley College");
            $("#e2 > p ").text("Wellesley is perhaps the best-known women’s liberal arts college in the world.  Wellesley alumnae support the College, in part, because they believe strongly in helping other young women achieve something important.  This ad pairs current Wellesley students with illustrious alumnae to demonstrate the value of supporting the college.");
            $("#e3 > h3").text("WBUR");
            $("#e3 > p ").text("One of dozens of campaigns I created for WBUR’s fundraising.  During my time there, we increased the amount raised through the mail by more than TEN times.  This campaign illustrated our central theme -- by contributing through the mail, you could drastically reduce on-air fundraising, a benefit that every listener would support.");
            $("#e4 > h3").text("NEJM CareerCenter");
            $("#e4 > p ").text("In addition to being a premiere medical publication, the New England Journal of Medicine is also a valuable resource for physicians seeking jobs. The postcard with the magnifying glass encourages physicians to search for jobs with NEJM; the other three pieces are directed at advertisers");
        });
    $("#l3").click(function() {
            $("#response").hide().html(" <div class=\"fill\"><p>The power of a brand is nearly incalculable. Every business, large or small, needs to define, articulate and promote their brand.</p> <p>I work with clients to develop their brand, using a disciplined yet flexible plan revolving around differentiators and core messages. The result is a document that both supplies content for all consumer-facing materials, and serves as a measuring stick for the future.</p> <p>It doesn’t make for a flashy show on a web page. But it does provide messages for ALL your audiences, in ALL your interactions that are powerful, differentiating and memorable.</p></div> ").fadeIn('800');
            $("#port").removeClass("p-hidden").addClass("p-visible");
            $("#e1 > h3").text("Wellesley College");
            $("#e1 > p ").text("Wellesley College’s fundraising efforts include a series of letters, customized by audience, along with other elements including brochures, lift notes, etc.  These are supported by ads in Wellesley’s alumnae magazine, email blasts, follow-ups, and thank you notes.  In a very poor year for fundraising, these efforts actually increased donations.");
            $("#e2 > h3").text("Scudder");
            $("#e2 > p ").text("A high impact series that invested an entire year’s marketing budget in one direct mail campaign.  Generated millions in business, reeled in two clients that were larger than any previous client, and won the New England Direct Marketing Association’s “Best of Show” award.");
            $("#e3 > h3").text("BrandWise");
            $("#e3 > p ").text("Dimensional direct mail can have a huge impact.  Sure, it’s expensive, but if you have a high-value product in which a small number of sales can generate big revenue, it’s worth it.  This early internet company signed two 7-figure clients as a direct result of this mailing.");
            $("#e4 > h3").text("Robomom");
            $("#e4 > p ").text("A software solution that helps IT professionals manage data centers, Robomon makes the IT department feel like superheroes.  We used that theme to appeal to a group of people who grew up loving comic books!");
        });
    $("#l4").click(function() {
            $("#response").hide().html(" <div class=\"fill\"><p>Fundraising is unique -- the donor is asked to spend money on something that yields no tangible or immediate benefit. Or so it seems. In reality, fundraising is most effective when it uncovers the core benefit that motivates contributions (not just “we need the money”).</p> <p>The key is to understand the the real reasons that people give. Once that connection is established, you can raise more money from more donors without increasing costs.</p> <p>I have found that stories work best. The truth is, donors don’t care that much about your organization … they care about their money helping people.</p></div> ").fadeIn('800');
            $("#port").removeClass("p-hidden").addClass("p-visible");
            $("#e1 > h3").text("Biogen Idec");
            $("#e1 > p ").text("Biogen Idec is a leading biotechnology firm that needed to tell its story to multiple constituents -- patients, physicians, investors, employees, potential hires.  This web site was designed (by Corey McPherson Nash) and written in 11 weeks.");
            $("#e2 > h3").text("Harvard Business School Publishing");
            $("#e2 > p ").text("Harvard Business School Publishing offers a variety of learning products to corporations.  For the launch of its Harvard ManageMentor product, I wrote and supervised production of this Flash demo which helped my client win a company-wide award for innovative marketing.");
            $("#e3 > h3").text("MIT Sloan Management Review");
            $("#e3 > p ").text("As part of a massive repositioning effort, MIT Sloan Management Review elected to focus on innovation. These animated banners were part of a series that helped associate MIT, Sloan School of Management, and the MIT Sloan Management Review on innovation.");
            $("#e4 > h3").text("Madeleine Korbel Albright Institute for Global Affairs");
            $("#e4 > p ").text("Wellesley College collaborated with one of its most prestigious alumnae, former Secretary of State Madeleine Albright, to create a special program that prepares young women for careers in international diplomacy.  This site announced the Institute, and provided an opportunity for donors and sponsors to participate.");
        });
    $("nav").click(function() {
            $("#response").hide().html(" <h3 id=\"question\"><em> What do you need to do? </em></h3> ").fadeIn('800');
            $("#port").removeClass("p-visible").addClass("p-hidden");
        });

});