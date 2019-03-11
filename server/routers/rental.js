const express = require('express');
const Router = express.Router();
const Rental = require('../model/rental')

Router.get('', function (req,res) {
    Rental.find({}, (err, rentalres)=>{
           res.json(rentalres)
    })
})

Router.get('/:id', function (req,res) {
     const rentalid = req.params.id;
      Rental.findById(rentalid,(err, rental)=>{
         if (err) {
             res.status(422).send({error: {Title:"could not find rental", 
             'error_detail':"please rentalid of  "+rentalid+" was not found"} })
         }
         res.json(rental)
      })
})

module.exports = Router;