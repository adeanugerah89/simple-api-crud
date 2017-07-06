'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/restaurantsController')

/* GET main endpoint. */
router.post('/', controller.createRestaurants);
router.get('/', controller.findAllRestaurants);
router.delete('/:id', controller.deleteRestaurants);
router.put('/:id', controller.updateRestaurants);
router.get('/:id', controller.findOneRestaurants);


module.exports = router;
