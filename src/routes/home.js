const express = require('express');
const homeRouter = express.Router();

const homeController = require('../app/controllers/homeController.js');

// GET /:slug1
homeRouter.get('/', homeController.home);

module.exports = homeRouter;
