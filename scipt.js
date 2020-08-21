
// const assQuotes = {
//     'Friedrich Nietzsche': ['He who has a why to live can bear almost any how.', 'When you stare into the abyss the abyss stares back at you.', 'The higher we soar, the smaller we appear to those who cannot fly.', 'The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.'],
//     'René Descartes': ['I think therefore I am.'],
//     'Søren Kierkegaard': ['Life must be understood backward. But it must be lived forward '],
//     'Jean-Paul Sartre':['Man is condemned to be free.', 'If you are lonely when you are alone, you are in bad company.', 'Only the guy who isn\'t rowing has time to rock the boat.'],
//     'Epictetus': ['Freedom is secured not by the fulfilling of one\'s desires, but by the removal of desire'],
//     'Aristotle': ['We are what we repeatedly do. Excellence, then, is not an act, but a habit'],
//     'Albert Camus': ['Man is the only creature that refuses to be what he is.', 'In the depth of winter I finally learned that there was in me an invincible summer.'],
//     'Arthur Schopenhauer': ['Talent hits a target no one else can hit; Genius hits a target no one else can see.', 'It is difficult to find happiness within oneself, but it is impossible to find it anywhere else.'],
//     'Marcus Aurelius': ['You have power over your mind - not outside events. Realize this, and you will find strength.', 'Death smiles at us all, but all a man can do is smile back.'],
//     'Blaise Pascal': ['All men\'s miseries derive from not being able to sit in a quiet room alone.'],
//     'Thomas Hobbes': ['The obligation of subjects to the sovereign is understood to last as long, and no longer, than the power lasteth by which he is able to protect them.']

// }

const assQuotes = [
  {'Friedrich Nietzsche': 'The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.'},
  {'Friedrich Nietzsche': 'The higher we soar, the smaller we appear to those who cannot fly.'},
  {'Friedrich Nietzsche': 'When you stare into the abyss the abyss stares back at you.'}, 
  {'Friedrich Nietzsche': 'He who has a why to live can bear almost any how.'},
  {'René Descartes': 'I think therefore I am.'},
  {'Søren Kierkegaard': 'Life must be understood backward. But it must be lived forward '},
  {'Aristotle': 'We are what we repeatedly do. Excellence, then, is not an act, but a habit'},
  {'Thomas Hobbes': 'The obligation of subjects to the sovereign is understood to last as long, and no longer, than the power lasteth by which he is able to protect them.'},
  {'Blaise Pascal': 'All men\'s miseries derive from not being able to sit in a quiet room alone.'},
  {'Epictetus': 'Freedom is secured not by the fulfilling of one\'s desires, but by the removal of desire'},
];


let quoteText = document.querySelector('#text');
let authorText = document.querySelector('#author')

//document.querySelector('.buttons__quote').addEventListener('click', changeQuoteObj);


// function changeQuoteArr() {
//     const random = randomNum();
//     const randomQuote = quotes[random];
//     const randomAuthor = authors[random];
//     quoteText.innerHTML = randomQuote;
//     authorText.innerHTML = randomAuthor;
// }

function changeQuoteObj() {
  const random = randomNum();
  const randomAuthor = Object.keys(assQuotes[random])[0];
  //const randomQuote = assQuotes[randomAuthor][randomNum(assQuotes[randomAuthor])];
  const randomQuote = assQuotes[random][randomAuthor];
  quoteText.innerHTML = randomQuote;
  authorText.innerHTML = randomAuthor;

}

function randomNum() {
  return Math.floor(Math.random() * assQuotes.length);
} 

$('.buttons__quote').click(function(){
  $('.quote-box__text').fadeOut(1000);
  $('.quote-box__author').fadeOut(1000, changeQuoteObj);
  $('.quote-box__text').fadeIn(1000);
  $('.quote-box__author').fadeIn(1000);
});

changeQuoteObj();


