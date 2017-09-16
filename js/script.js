window.onload = function () {
    var genQuoteButton = $("#genQuoteButton");
    var quote = $("#quoteBox");

    genQuoteButton.click(function() {
        quote.html("TEST");        
    });

    var apiEndPointURL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    //var callbackURL = "";
    
    var response = $.ajax({
			type: "GET",
			url: apiEndPointURL,
			dataType: 'JSONP'});
			success: alert("Loaded!");
			
					
};

 