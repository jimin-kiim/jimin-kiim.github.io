const quotes = [
    {
        quote: "You do not find the happy life. You make it.",
        author: "Camilla Eyring Kimball",
    },
    {
        quote: "Don't sit down and wait for the opportunities to come. Get up and make them.",
        author: "Madam C.J Walker",
    },
    {
        quote: "Always work hard and have fun in what you do because I think that's when you're more successful. You have to choose to do it.",
        author: "Simone Biles",
    },
    {
        quote: "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
        author: "Deep Roy",
    },
    {
        quote: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "Mother Teresa​",
    },
    {
        quote: "Spread love everywhere you go.",
        author: "Ella Fitzgerald",
    },
    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean",
    },
    {
        quote: "No matter what you're going through, there's a light at the end of the tunnel.",
        author: "Demi Lovato",
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote= quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;
