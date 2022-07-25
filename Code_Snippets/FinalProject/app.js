const express = require('express');

const authRoutes = require('./routes/auth.route');

const app = express();

app.use(authRoutes);

app.listen(3000);