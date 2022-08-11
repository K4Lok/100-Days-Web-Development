# REST API
> It stands for Representational State Transfer, also known as RESTful API, which is a form of URL-based API. It follows a pattern or constraints for interacting with REST Web Services.
Just keep it short, REST API handle requests in certain rules, so that developers share common behaviour.

---

## Build a RESTful API
> It's not hard to build a RESTful API in express.js, just returning the json format rather than normal HTML template.

A simple API that return a random quote from the database.

## Quotes Model
```js
// models/Quotes.js

const db = require('../data/database');

class Quotes {
    static async getAllQuotes() {
        let quotes;
        try {
            quotes = await db.getDB().collection('quotes').find().toArray();
        }
        catch(error) {
            console.log(Error);
        }
        return quotes;
    }
}

module.exports = Quotes;
```

## Quotes Controller
```js
// controllers/quotes.controller.js

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
```

## Quotes Routes
```js
// routes/quotes.routes.js

const express = require('express');

const quotesController = require('../controllers/quotes.controller');

const router = express.Router();

router.get('/', quotesController.getQuotes);

module.exports = router;
```

---
