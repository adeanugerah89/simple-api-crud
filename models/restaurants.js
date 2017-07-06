'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantsSchema = new Schema({
  name: String,
  owner: String,
  address: String
});

var Restaurants = mongoose.model('restaurants', restaurantsSchema);

module.exports = Restaurants;
