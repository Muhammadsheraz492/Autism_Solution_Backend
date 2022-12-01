const express=require('express')
const Route=express.Router();
Route.post("/",(req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.username);
    console.log(req.body.password);
    res.status(200).json("Signup Routes")
})

module.exports=Route