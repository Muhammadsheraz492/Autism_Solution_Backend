const express=require('express')
const app=express();
const morgan=require("morgan")
app.use(morgan('dev'))
app.use(express.json())
app.use("/",(req,res,next)=>{
res.status(200).json("Server in runing")
})




module.exports=app