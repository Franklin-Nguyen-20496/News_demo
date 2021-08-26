const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const morgan = require('morgan');
const route = require('./routes/index.js');
let Parser = require('rss-parser');
let parser = new Parser();


// add morgan lib for dev project
app.use(morgan('combined'));

// Set handlebars -template engine
app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Use static file
app.use(express.static(path.join(__dirname + '/public')));

// Add to use req.body dataView
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// route
route(app);

app.listen(port, () => {
    console.log(`News app listening at http://localhost:${port}`);
});
