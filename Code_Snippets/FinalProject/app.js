const path = require('path');
const express = require('express');
const expressSession = require('express-session');
const csrf = require('csurf');

const createSessionConfig = require('./config/session');
const db = require('./data/database');

const handleErrorsMiddleware = require('./middlewares/error-handler');
const addCSRFTokenMiddleware = require('./middlewares/csrf-token');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const protectRoutesMiddleware = require('./middlewares/protect-routes');
const cartMiddleware = require('./middlewares/check-cart');

const baseRoutes = require('./routes/base.routes');
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require('./routes/products.routes');
const adminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(cartMiddleware);

app.use(addCSRFTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);
app.use('/cart', cartRoutes);

app.use(protectRoutesMiddleware);
app.use('/orders', orderRoutes);
app.use('/admin', adminRoutes);

app.use(handleErrorsMiddleware);

db.connectToDatabase()
    .then(() => {
        app.listen(3000);
    })
    .catch(error => {
        console.log('Database not connected');
        console.log(error);
    })