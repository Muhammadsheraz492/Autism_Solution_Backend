const express=require('express')
const app=express();
const morgan=require("morgan")
const Signup=require('./Api/Routes/Signup')
const Login=require('./Api/Routes/Login')
const bodyParser=require('body-parser');
const { default: mongoose } = require('mongoose');
const Route = require('./Api/Routes/Product');
const VarifyEmail = require('./Api/Routes/VarifyEmail');
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
app.use('/test',(req,res,next)=>{
    res.status(200).json("Server is Runing")
})
// app.use("/",(req,res)=>{
// res.status(200).json({
//     "Status":"Server is runing"
// })
// })
app.use("/Signup",Signup)
app.use("/Login",Login)
app.use("/Product",Route)
app.use("/VarifyEmail",VarifyEmail)
app.use((req,res,next)=>{
    const error=new Error('Not Found')
    error.status=404
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.Error||500)
    res.json({
        error:{
            message:error.message
        }
    })
})
// app.use("/",(req,res,next)=>{
// res.status(200).json("Server in runing")
// })




module.exports=app