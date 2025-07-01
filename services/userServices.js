const User=require("../models/userModel");

exports.userExists=(email)=>User.findOne({email}).select("-password");
exports.getUser=(email)=>User.findOne({email}).select("+password");
exports.createUser=(data)=>User.create(data);
exports.updateUser=(id,data)=>User.findByIdAndUpdate(id,data).select("+password");
