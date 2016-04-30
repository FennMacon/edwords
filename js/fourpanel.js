$(document).ready(function() {
    $("#left li").click(
        function() {
            $("#question").text(" ").fadeOut('800');
        }
    );

    $("#l1").click(
        function() {
            $("#response").hide().html(" <p>Behind every great product or company is a story. A company’s story forges a powerful connection between the company and its customers.</p> <p>There are many ways to tell a company’s story – advertising, web sites, e-mails, personal comments from senior executives.  Consistent themes across all communications builds the brand.</p> <p>I believe in getting under the hood of each product, going beyond features and benefits to add context, depth, and perspective.  By building stories about your products and brand, you turn your customers from buyers into believers.</p> ").fadeIn('800');
        });
    $("#l2").click(function() {
            $("#response").hide().html(" <p>I cut my teeth in direct marketing, a medium generally reviled by brand-conscious marketers, because they (often rightly) think that tacky DR harms their brand (while still being effective and thus hard to kill.</p> <p>At Hill Holliday, I was told to do direct “that didn’t suck.”I discovered that branding and DR are actually two sides of the same coin … that when the branding is emotionally rich, it generates response.</p> <p>Still don’t love DR? Then think of it as “brand advertising that pays for itself.”</p> ").fadeIn('800');
        });
    $("#l3").click(function() {
            $("#response").hide().html(" <p>The power of a brand is nearly incalculable. Every business, large or small, needs to define, articulate and promote their brand.</p> <p>I work with clients to develop their brand, using a disciplined yet flexible plan revolving around differentiators and core messages. The result is a document that both supplies content for all consumer-facing materials, and serves as a measuring stick for the future.</p> <p>It doesn’t make for a flashy show on a web page. But it does provide messages for ALL your audiences, in ALL your interactions that are powerful, differentiating and memorable.</p> ").fadeIn('800');
        });
    $("#l4").click(function() {
            $("#response").hide().html(" <p>Fundraising is unique -- the donor is asked to spend money on something that yields no tangible or immediate benefit. Or so it seems. In reality, fundraising is most effective when it uncovers the core benefit that motivates contributions (not just “we need the money”).</p> <p>The key is to understand the the real reasons that people give. Once that connection is established, you can raise more money from more donors without increasing costs.</p> <p>I have found that stories work best. The truth is, donors don’t care that much about your organization … they care about their money helping people.</p> ").fadeIn('800');
        });
    $("nav").hover(function() {
            $("#response").hide().html(" <h3><em> What do you need to do? </em></h3> ").fadeIn('800');
        },
        function() {});

});