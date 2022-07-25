const path = require('path');

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res) {
    res.status(404).render('404');
});

app.use(function(error, req, res, next) {
    res.status(500).render('500');
});

app.listen(3000);