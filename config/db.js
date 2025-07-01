const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Successfully");
    } catch(err){
        console.log("Something went wrong with DB Connection",err);
    }
}

module.exports=connectDB;