const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../', 'data', 'restaurant.json');

function getStoredRestaurants() {
    const fileData = fs.readFileSync(filePath);
    const restaurants = JSON.parse(fileData);
    console.log(restaurants);

    return restaurants;
}

function storeRestaurants(storableRestaurants) {
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
    getStoredRestaurants,
    storeRestaurants,
}