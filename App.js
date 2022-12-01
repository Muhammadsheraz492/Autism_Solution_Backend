const express=require('express')
const app=express();
const morgan=require("morgan")
const Signup=require('./Api/Routes/Signup')
const bodyParser=require('body-parser');
const { default: mongoose } = require('mongoose');
const url='mongodb://localhost:27017'
app.use(morgan('dev'))
mongoose.connect(url,{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(()=>{
    console.log("Connection is Established");
}).catch(()=>{
    console.log("Something went wrong in connection");
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/Signup",Signup)
// app.use("/",(req,res,next)=>{
// res.status(200).json("Server in runing")
// })




module.exports=app