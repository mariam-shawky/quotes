
var allQuotes = [

    {
        text: '“So many books, so little time.”',
        author: '― Frank Zappa',
    },
    {
        text: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero',
    },
    {
        text: '“You only live once, but if you do it right, once is enough.”',
        author: '― Mae West',
    },
    {
        text: '“Be the change that you wish to see in the world.”',
        author: '― Mahatma Gandhi',
    },
    {
        text: '“A friend is someone who knows all about you and still loves you.”',
        author: '― Elbert Hubbard',
    },
    {
        text: '“To live is the rarest thing in the world. Most people exist',
        author: '― Oscar Wilde',
    },


];

var lastTurn ;

function getQuote() {
    
    var turn = Math.floor(Math.random() * allQuotes.length);
    if (turn !== lastTurn) {
        var fullQoute = allQuotes[turn].text + allQuotes[turn].author;
        document.getElementById('quote').innerHTML = fullQoute;
        lastTurn = turn;

    }
    else {
        
        getQuote()
    }
}

