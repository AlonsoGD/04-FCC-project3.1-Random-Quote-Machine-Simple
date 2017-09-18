//Waits till the page is loaded to run the code
window.onload = function () {                       
    var $genQuoteButton = $("#genQuoteButton");
    var $quoteBox = $("#quoteBox");
    var $quote;
    var $author;

    //function which connects to the API to retrieve the quotes. I also send a query specifiying the method, format and languaje desired    
    function genQuote() {   
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
                //some quotes come without an author. Those quotes will show "Unknown" with this conditional.
                if (response.quoteAuthor === "") {   
                    $author = "Unknown"
                } else {
                    $author = response.quoteAuthor; 
                }                
            }
        });
    }
    /////////////////////////////////////////////////////////////////////

    //We call this function when the page load, to ensure we already have a quote from the API to show when the user press the button.
    genQuote();
    //Function when "Get new quote" button is clicked. The quote and author is added to the DOM and then we call the genQuote function again to get a new quote if the button is pressed again.
    $genQuoteButton.click(function() {
        $quoteBox.html('"' + $quote + '"' + "<br><br><strong>" + '- ' + $author + "</strong>");
        genQuote();        
    });
};

 