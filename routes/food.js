'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/foodController')

/* GET main endpoint. */
router.post('/', controller.createFood);
router.get('/', controller.findAllFood);
router.delete('/:id', controller.deleteFood);
router.put('/:id', controller.updateFood);
router.get('/:id', controller.findOneFood);


module.exports = router;
