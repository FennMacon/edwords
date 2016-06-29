$(document).ready(function() {
    $("#fill").hide();
    $("#l1").click(function() {  
    $("#fill").fadeIn(1000);  
            $("#p1").text("Consumer knows nothing about you, your product or even your industry. They don’t care.");
            $("#p2").text("Tactic: Brand building, web site");
        });
    $("#l2").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#p1").text("The consumer perceives a need for your product or class of product. \“Huh, I could really use a new phone.\”");
            $("#p2").text("Tactic: Advertising, content marketing");
        });
    $("#l3").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#p1").text("The consumer is now thinking about purchasing a product from you or a competitor. \“I could really use a new phone NOW.\”");
            $("#p2").text("Tactic: Offers, email");
        });
    $("#l4").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#p1").text("The consumer is interested enough to compare your product to your competitors, with the expectation of making a purchase.");
            $("#p2").text("Tactic: Brochure, specific content marketing");
        });
    $("#l5").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#p1").text("Eureka! The consumer buys something. Now begins the \“tender time,\” when strong cultivation can build \“lifetime value\” … or risk losing them forever.");
            $("#p2").text("Tactic: Welcome kit, follow up email");
        });
    $("#l6").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#p1").text("Shared usage: The consumer buys your product if it’s on sale. Preferred usage: the consumer buys your product even if the competitor is cheaper, Exclusive usage: consumer will buy your product ONLY");
            $("#p2").text("Tactic: Loyalty programs, lifestyle marketing, newsletters");
        });
});