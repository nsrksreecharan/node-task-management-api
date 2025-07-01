const tokenServices=require("../services/tokenServices");
const userService=require("../services/userServices");

exports.protect=async(req,res,next)=>{
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
        token =req.headers.authorization.split(' ')[1];
    }

    if(!token){
        return res.status(401).json({message:"You are not logged in"});
    }

    try {
        const decoded= tokenServices.verifyToken(token);
        req.user = await userService.getUser(decoded.id);
        next();
    } catch (err){
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}