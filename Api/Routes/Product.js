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
    req.body.Category == "Threelatters" 
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
    console.log(document);
    document
      .save()
      .then(() => {
        res.status(200).json({
          "message":`${req.body.Name} is uploaded on this Threelatters Category`
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
    });
    document
      .save()
      .then(() => {
        res.status(200).json({
          message: `${req.body.Name} is Add In Pronunciation`,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(300).json({
          error: err,
        });
      });
  }else if (
    req.body.Category == "GreaterThenThreeLetter" 
    // req.body.Category == "FiveSentence"
  ) {
   
    if (req.body.Name.length<4) {
      res.status(400).json({
       "Status":false,
       "message":"Name Length is Less then 4 latter"
      })
    }
   else if (req.body.Name.length>50) {
      // res.status(200).end("Name Length is Greater then 50 latter")
      // res.write("Name Length is Greater then 50 latter").e
    
      // res.send("Name Length is Greater then 50 latter");
      const email = "Name Length is Greater then 50 latter";
      res.sendStatus(email);
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
          message: `${req.body.Name} is Add In GreaterThenThreeLetter`,
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
  } 
   else if (
    req.body.Category == "Fourletters" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
   if (req.body.Name.length>4) {
    
     res.end({
      "Status":false,
      "message":"Name Length is Genter then 4 letter"
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
          message: `${req.body.Name} is Add In Fourletters`,
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
   
   
    const str = req.body.Name;
    const words = str.split(" ");
    if (words.length <= 2) {
   
    
   
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
          message: `${req.body.Name} is Add In Two words`,
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
    } else {

      res.sendStatus("String does not contain two words.");
    }
    
  } 
  else if (
    req.body.Category == "ThreeWord" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
    const str = req.body.Name;
    const words = str.split(" ");
    if (words.length <= 3) {
   
    
   
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
          message: `${req.body.Name} is Add In Three words`,
        });
      })
      .catch((err) => {
        res.status(300).json({
          error: err,
        });
      });
    } else {

      res.sendStatus("String does not contain greater then three words.");
    }
    
  } 
    else if (
    req.body.Category == "Scentence" 
    // req.body.Category == "FiveSentence"
  ) {
   
   
    if (req.body.Name.length<4) {
      res.status(400).json({
       "Status":false,
       "message":"Name Length is Less then 4 word"
      })
    }
   else if (req.body.Name.length>40) {
      // res.status(200).end("Name Length is Greater then 50 latter")
      // res.write("Name Length is Greater then 50 latter").e
    
      // res.send("Name Length is Greater then 50 latter");
      const email = "Name Length is Greater then 40 word";
      res.sendStatus(email);
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
          message: `${req.body.Name} is Add In Scentence`,

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
