'use strict'

var Foods = require('../models/food');

var createFood = (req,res)=>{
  Foods.create({
    name: req.body.isbn,
    price: req.body.title
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}



module.exports = {
  
}; 




