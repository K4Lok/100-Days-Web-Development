const express = require('express');

const db = require('./data/database');
const quotesRoutes = require('./routes/quotes.routes');

const app = express();

app.use(quotesRoutes);

db.initDB()
.then(() => {
    app.listen(3000);
})
.catch(error => {
    console.log(error);
})