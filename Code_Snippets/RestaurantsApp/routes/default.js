const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.redirect('/');
});

router.get('/index.html', function(req, res) {
    res.redirect('/');
});

router.get('/about', function(req,res) {
    res.render('about');
});

module.exports = router;