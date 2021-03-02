const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/user");
const dbConnection = require("../db.config");
const bcrypt = require("bcrypt");
const verifyToken = require("./middleware/userVerify");
const jwt = require("jsonwebtoken");
mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true});
const nodemailer = require("nodemailer");
//var sgTransport = require('nodemailer-sendgrid-transport');
const nodemailerSmtpTransport = require("nodemailer-smtp-transport");
const crypto = require("crypto");

//let testAccount = nodemailer.createTestAccount();

var options = {
  auth: {
    api_user: "maya53535353747222", 
    api_key: "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", 
  }
}

const transport = nodemailer.createTransport( 
  nodemailerSmtpTransport({ service: "gmail",
  auth:{
    user: "feddynamiskweb@gmail.com",
    pass: "FedDynamiskWeb.2021"
  }
})

)

//var transport = nodemailer.createTransport(sgTransport(options));

/*
const transport = nodemailer.createTransport( 
  nodemailerSmtpTransport({ service: "SendGrid",
  auth: {
    user: "deblina4se", 
    pass: "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", 
  }
})
);*/

/*
let transport = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "deblina4se", 
    pass: "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", 
  },
});
*/

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


// reset password starts from here

router.get("/reset", (req, res)=> {



  res.render("forgotpwd.ejs")

})



router.post("/reset",  async (req, res)=>{


  // check if user available in db 

 const user =  await User.findOne({email:req.body.email})
    
  // get email 

  console.log("after user found");

  //res.send(user.email)

    //  -> token and tokenExpiration 

    if (user) {
    const token = await crypto.randomBytes(32);
    console.log("after random token");

       //   save in database 

       user.token= token.toString("hex");
       user.tokenExpiration = Date.now() + 3600000;
       await user.save();
       console.log("after user saved");
        console.log(req.headers.host);

       // send mail with better mail server
  await transport.sendMail({
          from: "deblina4.se@gmail.com",
          to: user.email, // Change to your recipient
         // Change to your verified sender
          subject: 'Återställa ditt lösenord',
         
          html: `<h1> Trycka på den här länken : <a href=" http://localhost:3000/user/reset/${user.token}"> Link  </a> </h1>`,
       }, function(err, info){
        if (err ){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
        }
    });
       
       //reset password

     return res.send("ditt lösenord är skickat");
    }


})



router.get("/reset/:token", async (req, res)=>{
console.log("i am in");

const token =  req.params.token
console.log(token);

// check if user has the right token and token has valid time


const userWithtokenExist = await User.findOne({token:token, tokenExpiration: {$gt:Date.now()}});

console.log(userWithtokenExist)

res.render("resetpwd", {userWithtokenExist})


});


router.post("/resetPass" , async (req, res)=>{
const nyttPass = req.body.password;
  // tar in nytt lösenord 
  // spara in i user in i database
const user = await User.findOne({email:req.body.hidEmail})
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(nyttPass, salt);
user.password = hashedPassword ;

user.save();

res.send("Lykades att skapa nytt lösenord")


})

module.exports = router;
