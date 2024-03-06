import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized-No Token provided"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"Unauthorized-Invalid Token"});
        }

        const user=await User.findById(decoded.userId).select("-password");

        if(!user){
           return res.status(500).json({error:"Internal server error from ProtectRoute"});
        }
        req.user=user;
        next();

        
    } catch (error) {
        console.log("Error in ProtectRoute middleware",error.message);
        res.status(500).json({error:"Internal Server error from ProtectRoute"});
        
    }
}

export default protectRoute;