const path = require('path');
const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.route');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(authRoutes);

db.connectToDatabase()
    .then(() => {
        app.listen(3000);
    })
    .catch(error => {
        console.log('Database not connected');
        console.log(error);
    })