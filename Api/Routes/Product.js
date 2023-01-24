const express = require("express");
const { default: mongoose } = require("mongoose");
const Route = express.Router();
const Document = require("../model/Documents");
const multer = require("multer");
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
  // res.s
  if (
    req.body.Category == "ThreeWords" ||
    req.body.Category == "FiveSentence"
  ) {
   
   
   if (req.body.Name.length>3) {
     res.status(400).json({
      "Status":false,
      "message":"Name Length is Genter then 3 latter"
     })
   }
   
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
    VocalImage: req.file.path,

    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  } else if (req.body.Category == "Pronunciation") {
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
      PronunSymbol: req.body.PronunSymbol,
      Pronnous:req.body.Pronnous
    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  }else if (
    req.body.Category == "GreaterThenThreeLatter" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
   
   
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
    VocalImage: req.file.path,

    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  } 
   else if (
    req.body.Category == "Fourlatters" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
   if (req.body.Name.length>4) {
    
     res.end({
      "Status":false,
      "message":"Name Length is Genter then 3 latter"
    });

   }
   
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
    VocalImage: req.file.path,

    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  } 
  else if (
    req.body.Category == "TwoWord" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
 
   
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
    VocalImage: req.file.path,

    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  } 
  else if (
    req.body.Category == "ThreeWord" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
 
   
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
    VocalImage: req.file.path,

    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  }   else if (
    req.body.Category == "Scentence" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
 
   
    const document = new Document({
      _id: mongoose.Types.ObjectId(),
      Category: req.body.Category,
      Name: req.body.Name,
    VocalImage: req.file.path,

    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: "Okey Data Captured",
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  } 
  else {
    res.status(300).json({
      Status: false,
      message: "Something Went Wrong",
    });
  }
});
Route.patch("/", Upload.single("Upload"), (req, res, next) => {
  const document = new Document({
    _id: mongoose.Types.ObjectId(),
    Category: req.body.Category,
    Name: req.body.Name,
    VocalImage: req.file.path,
  });
  document
    .save()
    .then(() => {
      res.status(200).json({
        message: "Data Captured",
      });
    })
    .catch((err) => {
      res.status(300).json({
        error: err,
      });
    });
});
Route.get("/:Category", (req, res, next) => {
    console.log(req.params.Category);
  Document.find({ Category: req.params.Category})
    .then((doc) => {
      // console.log;
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(200).json({
        error: err,
      });
    });
});

module.exports = Route;
