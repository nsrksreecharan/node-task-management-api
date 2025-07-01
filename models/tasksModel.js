const mongoose=require("mongoose");

const attachmentSchema=new mongoose.Schema({
    filename:String,
    originalname:String,
    mimetype:String,
    size:Number,
    path:String
},{ _id:false });

const tasksSchema=mongoose.Schema(
    {
        title:{type:String,required:true},
        task:{type:String},
        status:{
            type:String,
            enum:["pending","in-progress","completed"],
            default:"pending"
        },
        description:{type:String},
        attachments:[attachmentSchema],
        dueDate:Date,
        priority:{
            type:String,
            enum:["low","medium","high","urgent"],
            default:"medium",
        },
        assignees:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"users",
            }
        ]
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model("tasks",tasksSchema);