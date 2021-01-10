let quotes = [
    {
    contents:'Humor is richly rewarding to the person who employs it.' 
    +'It has some value in gaining and holding attention. But it has no persuasive value at all',
    author:'John Kenneth Galbraith',
    },
    {
    contents:'The price of anything is the amount of life you exchange for it.',
    author:'David Thoreau',
    },
    {
    contents:'God save me from my friends. I can protect myself from my enemies.',
    author:'Claude Louis Hector De Villars',
    },
    {
    contents:'The price of anything is the amount of life you exchange for it.',
    author:'David Thoreau',
    },
    {
    contents:'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    author:'Charles Lindbergh',
    },
];
let contentQuote  = document.querySelector('.content-generate-quote>p');
let authorQuote  = document.querySelector('.author-generate-quote>span');
let generateQuote  = document.querySelector('.btn-generate-quote');
function generateQuoteFunction() {
    const randomNumber = Math.floor(Math.random()*quotes.length);
    contentQuote.textContent = quotes[randomNumber].contents;
    authorQuote.textContent = quotes[randomNumber].author;
}
generateQuote.addEventListener('click',generateQuoteFunction);
