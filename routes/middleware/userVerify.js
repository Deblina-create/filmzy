const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next)=> {
 
    //efter användare har loggat in har de rätt jwtToken
    const token = req.cookies.jwtToken;
    if(!token)
        res.redirect("/user/signin?redirectRoute=" + req.originalUrl);
    
    //verifiera token 
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if(decoded && decoded.user){
            req.user = decoded.user;
            next();
        }
        else
            res.redirect("/user/signin?redirectRoute=" + req.originalUrl);
      });
    
    
    //next();
    
    }

    module.exports = verifyToken;