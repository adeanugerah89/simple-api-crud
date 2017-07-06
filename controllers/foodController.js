'use strict'

var Foods = require('../models/food');

var createFood = (req,res)=>{
  Foods.create({
    name: req.body.name,
    price: req.body.price
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var findAllFood = (req,res)=>{
  Foods.find({},(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var deleteFood = (req,res)=>{
  Foods.findByIdAndRemove(req.params.id,(err)=>{
      if (err) {
        res.send(err)
      }
      res.send('data already delete')
  })
}

var updateFood =(req,res)=>{
  Foods.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err)
    }
    data.name = req.body.name || data.name;
    data.price = req.body.price || data.price;
    
    data.save((err,data) =>{
      if (err) {
        res.send(err)
      }
      res.send(data)
      console.log('data already update');
    })
  })
}
  
  var findOneFood = (req,res)=>{
    Foods.findById(req.params.id,(err,data)=>{
      if (err) {
        re.send(err)
      }
      console.log(data);
      res.send(data)
    })
  }


module.exports = {
  createFood,
  findAllFood,
  deleteFood,
  updateFood,
  findOneFood
}; 




