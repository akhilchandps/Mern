const jwt = require('jsonwebtoken');

const users = require('../Models/userModel');

const ProtectRoute = async(req,res,next)=>{
try {
    const token =req.cookies.jwt

    if(!token){

        return res.status(401).json({error:"Unauthorized-No Token provided"})
    }

    const decoded = jwt.verify(token ,process.env.JWT_SECRET);
    if(!decoded){
        return res.status(401).json({error:"Unauthorized-inavalid token"})
    }

    const user = await users.findById({decoded:userId}).select("-password")

    if(!user){
        return res.status(401).json({error:"error user not found"})
    }

    req.user= user;
    next()
    
} catch (error) {
    console.log("Error in protect route middileware", error.message);
    res.status(500).json({error:"internal server error..."})
}
}

module.exports = ProtectRoute;