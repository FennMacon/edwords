$(document).ready(function() {
    $("#fill").hide();
    $("#l1").click(function() {  
    $("#fill").fadeIn(1000);  
            $("#fill > p").text("In the beginning, there is darkness. Customers don’t know anything about you, or even about your industry. They just don’t care, because they are not in the market for your product.");
        });
    $("#l2").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#fill > p").text("The customer perceives a need for your product or class of product. \“Huh, I could really use a new phone.\”");
        });
    $("#l3").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#fill > p").text("The customer is now thinking about purchasing a product from you or a competitor. \“I could really use a new phone NOW.\”");
        });
    $("#l4").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#fill > p").text("The customer is interested enough to compare your product to your competitors, with the expectation of making a purchase.");
        });
    $("#l5").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#fill > p").text("Eureka! The customer buys something.");
        });
    $("#l6").click(function() { 
    $("#fill").fadeIn(1000);   
            $("#fill > p").text("Let’s say you sell toothpaste. At Shared Usage, your customer will buy your toothpaste if it’s cheapest or on sale.");
        });
});