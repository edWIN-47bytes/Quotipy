const fs = require("fs/promises");

async function getQuote() {
    const quotesfile = JSON.parse(await fs.readFile("./quotes.json","utf-8"));
    const quotes = quotesfile.map((quote) => {
        return {
            quote: quote.quoteText
        };
    });
    return quotes[Math.floor(Math.random() * quotes.length)].quote;
}

module.exports = getQuote;