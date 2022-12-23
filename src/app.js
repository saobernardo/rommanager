require("dotenv").config({
  path: process.env.NODE_ENV,
});

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const routes = require('./routes/');
const helpers = require('./config/helpers');

app.use(express.json());

const hbs = handlebars.create({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: helpers
});

app.use('/assets', express.static('src/app/public'));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');
app.set('views', './views');

routes(app);

module.exports = app;