const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let database;

async function initDB() {
    const client = await mongoClient.connect('mongodb://localhost:27017');
    database = client.db('test-rest-api');
}

function getDB() {
    if(!database) {
        throw {message: 'Database connection not established!'};
    }
    return database;
}

module.exports = {
    initDB: initDB,
    getDB: getDB
}