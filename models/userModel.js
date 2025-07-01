const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=mongoose.Schema(
    {
        name:{type:String , required:true , trim: true},
        role:{
            type:String,
            enum:["developer","fc","scrum master","TL"],
            default:"developer",
        },
        email:{ type:String, required:true,trim:true,lowercase:true},
        password:{ type:String, required:true,minlength:6, 
            select: false// do not return password by default
        },
    }, { timestamps:true}
);

// hash password on every update or creation
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.correctPassword =function(password){
    console.log(password,this.password,this,"password password")
    return bcrypt.compare(password,this.password);
};

module.exports=mongoose.model("user",userSchema);