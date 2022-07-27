const path = require('path');
const express = require('express');
const expressSession = require('express-session');
const csrf = require('csurf');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const authRoutes = require('./routes/auth.route');

const handleErrorsMiddleware = require('./middlewares/error-handler');
const addCSRFTokenMiddleware = require('./middlewares/csrf-token');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(handleErrorsMiddleware);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());
app.use(addCSRFTokenMiddleware);

app.use(authRoutes);


db.connectToDatabase()
    .then(() => {
        app.listen(3000);
    })
    .catch(error => {
        console.log('Database not connected');
        console.log(error);
    })