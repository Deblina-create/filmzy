const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next)=> {
 
    //efter användare har loggat in har de rätt jwtToken
    const token = req.cookies.jwtToken;
    //console.log("Token is below");
    console.log(token);
    if(!token)
        res.redirect("/user/signin?redirectRoute=" + req.originalUrl);
    
    //verifiera token 
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        //console.log(req);
        if(decoded && decoded.user){
            req.user = decoded.user;
            next();
        }
        else
            res.redirect("/user/signin?redirectRoute=" + req.originalUrl);
      });
    //console.log("bnm");
    
    
    //next();
    
    }

    module.exports = verifyToken;