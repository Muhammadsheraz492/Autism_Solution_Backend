const express=require('express');
const { default: mongoose } = require('mongoose');
const Route=express.Router();
const Document=require("../model/Documents")
Route.post('/',(req,res,next)=>{
    // res.s
    if(req.body.Category=="ThreeWords"||req.body.Category=="FiveSentence"){
        const document=new Document({
            _id:mongoose.Types.ObjectId(),
            Category:req.body.Category,
            Name:req.body.Name
        })
        document.save().then(()=>{
            res.status(200).json({
                message:"Okey Data Captured"
            })
        }).catch((err)=>{
            res.status(300).json({
                "error":err
            })
        })
    }else if(req.body.Category=="Pronunciation"){
        const document=new Document({
            _id:mongoose.Types.ObjectId(),
            Category:req.body.Category,
            Name:req.body.Name,
            PronunSymbol:req.body.PronunSymbol
        })
        document.save().then(()=>{
            res.status(200).json({
                message:"Okey Data Captured"
            })
        }).catch((err)=>{
            res.status(300).json({
                "error":err
            })
        })
    }else{
        res.status(300).json({
            Status:false,
            message:"Something Went Wrong"
        })
    }
})
Route.patch('/',(req,res,next)=>{
    const document=new Document({
        _id:mongoose.Types.ObjectId(),
        Category:req.body.Category,
        Name:req.body.Name,
        PronunSymbol:req.body.PronunSymbol
    })
    document.save().then(()=>{
        res.status(200).json({
            message:"Okey Data Captured"
        })
    }).catch((err)=>{
        res.status(300).json({
            "error":err
        })
    })
})


module.exports=Route