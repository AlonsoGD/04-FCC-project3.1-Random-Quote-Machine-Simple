//Waits till the page is loaded to run the code
window.onload = function () {                       
    var $genQuoteButton = $("#genQuoteButton");
    var $quoteBox = $("#quoteBox");
    var $twitterButton = $("#twitterButton");
    var $quote;
    var $author;
    var $tweetUrl;

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
    //Function to create a url with the quote and the author, so it prepopulate a tweet. It also chages the href in the html for the link in the twitter icon
    function genTweetUrl() {
        $tweetUrl = "https://twitter.com/intent/tweet?hashtags=quote&text=" + '"' + $quote + '" ' + '- ' + $author;
        $twitterButton.attr("href", $tweetUrl);
    }
    /////////////////////////////////////////////////////////////////////

    //We call this function when the page load, to ensure we already have a quote from the API to show when the user press the button.
    genQuote();

    /* Function when "Get new quote" button is clicked. The quote and author is added to the DOM and then we call the genQuote function again to 
    get a new quote if the button is pressed again. It also calls the genTweetUrl so the link in the twitter icon is updated to prepopulate 
    the tweet with the quote and the author. */
    $genQuoteButton.click(function() {
        $quoteBox.fadeOut(400, function() {
            genQuote();
            genTweetUrl();
            $quoteBox.html('"' + $quote + '"' + "<br><br><strong>" + '- ' + $author + "</strong>");
        });
        $quoteBox.fadeIn(400);
    });
};

 