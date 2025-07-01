const userServices=require("../services/userServices");
const tokenServices=require("../services/tokenServices");

exports.registerUser=async(req,res,next)=>{
    try{
        const {email,name,password}=req.body;
        const existingUser=await userServices.userExists(email);
        debugger
        console.log(existingUser,"existingUser")
        if(existingUser){
            return res.status(400).json({message:"User Existing with this email"});
        }

        const user = await userServices.createUser(req.body);
        const token=tokenServices.createToken(user._id);
        res.status(201).json({
            message:"User Created Successfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            }
        });
    } catch (err) {
        next(err);
    }
}

exports.loginUser=async(req,res,next)=>{
    try{debugger
        const {email,password}=req.body;

        // console.log(user,password,"user");
        const user=await userServices.getUser(email);
        console.log(user,password,"user");
        if(!user || !await user.correctPassword(password)){
            return res.status(401).json({message:"Invalid email or password"});
        }

        const token=tokenServices.createToken(user._id);
        res.status(200).json({
            message:"Login Successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });

    } catch(err) {
        next(err);
    }
}