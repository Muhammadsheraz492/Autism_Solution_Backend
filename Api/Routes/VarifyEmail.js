const express=require('express')
const Route=express.Router()
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')

const Main=async(req,res,next)=>{
    const otp=otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets:false});
    let transporter=nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user:"s412971@gmail.com", // generated ethereal user
          pass: "vfscqrhxirkbwsxm", // generated ethereal password
        },
    })
     transporter.sendMail({
        from: '"Otp Varification" s412971@gmail.com', // sender address
        to: req.body.email, 
        subject: "Tradly ✔", 
        text: otp, 
    
      }).then((info)=>{
        res.status(200).json({
            status:true,
            otp:otp,
            // message:"Sent"           
        })
        //   next()
      }).catch((err)=>{
        res.status(200).json({           
            status:false,
            error:"Something went wrong"          
        })
      })
}
  
Route.post("/",(req,res,next)=>{
    Main(req,res,next)
})


module.exports=Route