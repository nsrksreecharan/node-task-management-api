module.exports=(err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({message:`Internal Server Error ${err}`});
}