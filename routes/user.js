const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/user");
const dbConnection = require("../db.config");
const bcrypt = require("bcrypt");
const verifyToken = require("./middleware/userVerify");
const jwt = require("jsonwebtoken");
mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true});

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  res.render('user', { user: {}, info: {mode: "Sign up"}, error: {}, redirectRoute: ""});
  //res.render('user', { user: {email: req.body.email}, info: {mode: "Sign In"}, error: {message: "Incorrect email/password!"}});
});

router.post("/", async (req, res, next) => {
  if(req.body.hidMode === "Sign up"){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
      email: req.body.email,
      password: hashedPassword
    });
    let userInDb = await User.findOne({ email: req.body.email});
    if(!userInDb)
    {
      user.save().then(async () => {
        const jwtToken = await jwt.sign({user:user}, process.env.SECRET_KEY);  
        
        if(jwtToken) {

            const cookie = req.cookies.jwtToken;

           
            if(!cookie) {
              
                res.cookie("jwtToken", jwtToken, {maxAge:3600000, httpOnly: true} );
            }
            if(req.body.hidRedirectRoute)
              await res.redirect(req.body.hidRedirectRoute);
            await res.redirect("/");
        }   
      });
    }
    else{
      res.render('user', { user: {email: req.body.email}, info: {mode: "Sign up"}, error: {message: "User already exists!"}, redirectRoute: ""});
    }
  }
  else{
    
    let userInDb = await User.findOne({ email: req.body.email});
    const checkedPassword = await bcrypt.compare(req.body.password, userInDb.password)

    if(checkedPassword)
    {
      const jwtToken = await jwt.sign({user:userInDb}, process.env.SECRET_KEY);


        
        if(jwtToken) {

            const cookie = req.cookies.jwtToken;

            if(!cookie) {
              
                res.cookie("jwtToken", jwtToken, {maxAge:3600000, httpOnly: true} );
            }
            if(req.body.hidRedirectRoute)
              await res.redirect(req.body.hidRedirectRoute);
            await res.redirect("/");
        }   
    }
    else{
      res.render('user', { user: {email: req.body.email}, info: {mode: "Sign In"}, error: {message: "Incorrect email/password!"}});
    }
  }
});
router.get('/signin', (req, res, next) => {
  const redirectRoute = req.query.redirectRoute;
  res.render('user', { user: {}, info: {mode: "Sign in"}, error: {}, redirectRoute: redirectRoute});
});

router.get("/signout", (req, res)=>{
  res.clearCookie("jwtToken");
  res.redirect("/");
})

module.exports = router;
