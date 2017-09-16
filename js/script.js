window.onload = function () {
    var genQuoteButton = $("#genQuoteButton");
    var quote = $("#quoteBox");

    genQuoteButton.click(function() {
        quote.html("TEST");        
    });

    var apiEndPoint = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    $.ajax(apiEndPoint);
};
//TEST CONSOLE IN LINUX
  