const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore() {
    const MongoDbStore = mongoDbStore(session);

    const store = new MongoDbStore({
        uri: 'mongodb://localhost:27017',
        databaseName: 'online-shop',
        collection: 'sessions'
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: 'ekasdfije',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        },
        store: createSessionStore(),
        resave: false,
        saveUninitialized: false
    };
}

module.exports = createSessionConfig;