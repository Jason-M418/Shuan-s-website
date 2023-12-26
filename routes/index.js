//routes defined here
var express = require('express');
var router = express.Router();
var controller = require('./controllers/controller');

//routes to files
router.get('/', controller.rootRoute);
router.get('/home', controller.homeRoute);
router.get('/about', controller.aboutRoute);
router.get('/contact', controller.contactRoute);

module.exports = router;