const newsRouter = require('./news.js');
const homeRouter = require('./home.js');

function route(app) {

    // USE /:slug1
    app.use('/news', newsRouter);

    // USE /
    app.use('/', homeRouter);
};

module.exports = route;