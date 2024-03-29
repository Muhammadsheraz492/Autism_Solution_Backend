const express = require("express");
const { default: mongoose } = require("mongoose");
const Route = express.Router();
// const Document = require("../model/Documents");
// Quz
const multer = require("multer");
const Quz1 = require("../model/Quz");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Upload/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toString() + file.originalname);
    // cb(null, new Date().toString() + file.originalname);
  },
});
const Upload = multer({ storage: storage });


Route.post("/", Upload.single("Upload"),(req, res, next) => {


    const Quz = new Quz1({
        _id: mongoose.Types.ObjectId(),
        Option: req.body.Option,
        Question: req.body.Question,
        Correct:req.body.Correct,
        VocalImage: req.file.path,
      });
      Quz
        .save()
        .then(() => {
          res.status(200).json({
            message: "Questions Added in Quz",
          });
        })
        .catch((err) => {
          res.status(300).json({
            error: err,
          });
        });
})


Route.get('/',(req,res,next)=>{
  Quz1.find({}).then((doc)=>{
       res.status(200).json(doc)
  }).catch((err)=>{
    res.status(200).json({
      status:false,
      message:err
    })
  })

})





module.exports = Route;
