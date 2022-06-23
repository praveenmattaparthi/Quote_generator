var quote_container = document.getElementsByClassName('quote_container')
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var twitter = document.getElementById('twitter_button');
var new_user = document.getElementById('new_user');
const quote_url = 'https://type.fit/api/quotes';
var apiQuotes = [];
var random =0;

// Call APi
async function getQuote() {
    try {
        const response = await fetch(quote_url);
        apiQuotes = await response.json();

        newQuote();
    }
    catch (error) { console.log(error) }
}

function newQuote() {
    console.log('this is from the new quote', apiQuotes);
    random = Math.floor(Math.random() * apiQuotes.length);
    quote.innerText = apiQuotes[random].text;

    if( apiQuotes[random].author === null){
        author.innerText = '-UNKNOWN'
    }else{
        author.innerText = apiQuotes[random].author;
    }
}

twitter.addEventListener('click',function(){
    window.open(`https://twitter.com/intent/tweet?text=${apiQuotes[random].text} - ${apiQuotes[random].author}`,'_blank')
})

new_user.addEventListener('click',newQuote)


getQuote();