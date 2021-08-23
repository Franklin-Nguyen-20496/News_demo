const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const morgan = require('morgan');

// add morgan lib for dev project
app.use(morgan('combined'));

// Set handlebars -template engine
app.engine('.hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Use static file
app.use(express.static(path.join(__dirname + '/public')));
// console.log('PATH', path.join(__dirname + '/public'));

// routingggg
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => {
  console.log(`News app listening at http://localhost:${port}`)
});
