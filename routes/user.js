const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/user");
const dbConnection = require("../db.config");
mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true});

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  res.render('user', { user: {}, info: {mode: "Sign up"}, error: {}});
});

router.post("/", async (req, res, next) => {
  //console.log(req.body);
  //console.log(res.location());
  if(req.body.hidMode === "Sign up"){
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
    let userInDb = await User.findOne({ email: req.body.email});
    console.log(userInDb);
    if(!userInDb)
    {
      user.save().then(() => {
        res.redirect("/");
      });
    }
    else{
      res.render('user', { user: {email: req.body.email}, info: {mode: "Sign up"}, error: {message: "User already exists!"}});
    }
  }
  else{
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
    let userInDb = await User.findOne({ email: req.body.email, password: req.body.password });
    if(userInDb)
    {
      res.redirect("/");
    }
    else{
      res.render('user', { user: {email: req.body.email}, info: {mode: "Sign In"}, error: {message: "Incorrect email/password!"}});
    }
  }
});
router.get('/signin', (req, res, next) => {
  console.log(req.params.id);
  res.render('user', { user: {}, info: {mode: "Sign in"}, error: {}});
});



module.exports = router;
