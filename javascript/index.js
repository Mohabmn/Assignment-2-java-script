var quotes = [
    " “Be yourself; everyone else is already taken.” ",
    " “You only live once, but if you do it right, once is enough.” ",
    " “So many books, so little time.” ",
    " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    " “A room without books is like a body without a soul.” ",
    " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” "
]

var previousindex = -1;

function displayQuotes() {

    var randIndex = Math.floor(Math.random() * quotes.length);
    if (randIndex === previousindex) {
       randIndex ++;
    }
    document.getElementById("the-quote").innerText = quotes[randIndex];
    previousindex = randIndex;
    console.log(randIndex);
}

