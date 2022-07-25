const uuid = require('uuid');

const resData = require('../util/restaurant-data');

const express = require('express');
const router = express.Router();

router.get('/confirm', function(req,res) {
    res.render('confirm');
});

router.get('/recommend', function(req,res) {
    res.render('recommend');
});

router.post('/recommend', function(req, res) {
    const newRestaurant = req.body;
    newRestaurant.id = uuid.v4();

    const restaurants = resData.getStoredRestaurants();
    console.log(newRestaurant);
    
    restaurants.push(newRestaurant);
    resData.storeRestaurants(restaurants);

    res.redirect('/confirm');
});

router.get('/restaurants', function(req, res) {
    const restaurants = resData.getStoredRestaurants();

    console.log(restaurants);

    res.render('restaurants', { restaurants: restaurants });
});

router.get('/restaurants/:id', function(req, res) {
    const restaurantId = req.params.id;

    const restaurants = resData.getStoredRestaurants();

    for(const restaurant of restaurants) {
        if(restaurant.id === restaurantId) {
            return res.render('restaurants-detail', { restaurant: restaurant });
        }
    }

    return res.render('404');
});

module.exports = router;