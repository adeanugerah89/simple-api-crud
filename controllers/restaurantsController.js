'use strict'

var Restaurants = require('../models/restaurants');

var createRestaurants = (req,res)=>{
  Restaurants.create({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var findAllRestaurants = (req,res)=>{
  Restaurants.find({},(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var deleteRestaurants = (req,res)=>{
  Restaurants.findByIdAndRemove(req.params.id,(err)=>{
      if (err) {
        res.send(err)
      }
      res.send('data already delete')
  })
}

var updateRestaurants =(req,res)=>{
  Restaurants.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err)
    }
    data.name = req.body.name || data.name;
    data.owner = req.body.owner || data.owner;
    data.address = req.body.address || data.address;
    
    data.save((err,data) =>{
      if (err) {
        res.send(err)
      }
      res.send(data)
      console.log('data already update');
    })
  })
}
  
  var findOneRestaurants = (req,res)=>{
    Restaurants.findById(req.params.id,(err,data)=>{
      if (err) {
        re.send(err)
      }
      console.log(data);
      res.send(data)
    })
  }


module.exports = {
  createRestaurants,
  findAllRestaurants,
  deleteRestaurants,
  updateRestaurants,
  findOneRestaurants
}; 




