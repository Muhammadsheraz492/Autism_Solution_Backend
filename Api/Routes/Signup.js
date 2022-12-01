const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../model/User");
const Route = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
Route.post("/", (req, res, next) => {
  console.log(req.body.email);
  console.log(req.body.username);
  console.log(req.body.password);
  User.find({ email: req.body.email }).then((doc) => {
    if (doc.length >= 1) {
      res.status(300).json({
        message: "You already Signup",
      });
    } else {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (err) throw err;
        const user = new User({
          _id: mongoose.Types.ObjectId(),
          email: req.body.email,
          username: req.body.username,
          password: hash,
        });
        user
          .save()
          .then(() => {
            res.status(200).json({
              status: true,
              message: "You Sign Up",
            });
          })
          .catch((err) => {
            res.status(200).json({
              status: false,
              error: err,
            });
          });
      });
    }
  });
});

module.exports = Route;
