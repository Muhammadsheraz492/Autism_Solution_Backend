const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../model/User");
const Route = express.Router();
const bcrypt = require("bcrypt");
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
Route.post("/", (req, res, next) => {
  console.log(req.body.email);
  
  console.log(req.body.password);
  User.find({ email: req.body.email }).then((doc) => {
    // console.log();
  
    if (doc.length >= 1) {
       bcrypt.compare(req.body.password,doc[0].password,(err,result)=>{
        if(err) throw err;
        else{
            res.status(200).json({
                status:true,
                message:"You are login "
            })
        }
       })
    } else {
       res.status(200).json({
        message:"User not found"
       })
    }
  });
});

module.exports = Route;
