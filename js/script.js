window.onload = function () {
    var $genQuoteButton = $("#genQuoteButton");
    var $quoteBox = $("#quoteBox");
    var $quote;
    var $author;
    
    function genQuote() { 
       //var apiEndPointURL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
        $.ajax({
            type: "GET",
            url: "https://api.forismatic.com/api/1.0/",
            jsonp: 'jsonp',
            dataType: "jsonp",
            crossDomain: "true",
            data: {
                method: "getQuote",
                format: "jsonp",
                lang: "en"
            },
            success: function(response) {
                $quote = response.quoteText;
                $author = response.quoteAuthor; 
            }
        });
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    genQuote();
    $genQuoteButton.click(function() {
        $quoteBox.html('"' + $quote + '"' + "<br><strong>" + $author + "</strong>");
        genQuote();        
    });
};

 