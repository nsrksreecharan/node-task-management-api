const jwt=require("jsonwebtoken");

exports.createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

exports.verifyToken =(token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}