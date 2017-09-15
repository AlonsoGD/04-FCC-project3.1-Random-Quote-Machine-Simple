
window.onload = function () {
    var genQuoteButton = $("#genQuoteButton");
    var quote = $("#quoteBox");

    genQuoteButton.click(function() {
        quote.empty()
             .append("TEST");        
    });
}

  