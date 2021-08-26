const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/newsController.js');

newsRouter.get('/:slug1/:slug2', newsController.detail);
newsRouter.get('/:slug1', newsController.show);


module.exports = newsRouter;
