const Quotes = require('../models/Quotes');

async function getQuotes(req, res, next) {
    const quotes = await Quotes.getAllQuotes();

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIndex].text;

    res.json({
        message: 'success',
        quote: randomQuote
    });
}

module.exports = {
    getQuotes: getQuotes
}