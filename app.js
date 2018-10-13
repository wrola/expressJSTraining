const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index.js');
const flash = require('connect-flash');
const session = require('express-session')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true}));
app.use(cookieParser());
app.use(session({
    
}))
app.use(flash());

app.use('/', routes);

module.exports = app;