const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const helpers = require('./config/helpers');

app.use(express.json());
app.use('/assets', express.static('src/app/public'));

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: helpers
}));

let port = 3000;

app.listen(port, () => { console.log(`Server en el puerto ${port}`)});