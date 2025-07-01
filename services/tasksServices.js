const Tasks=require("../models/tasksModel");
exports.getAllTasks=()=>Tasks.find().sort({createdAt:-1});
exports.getTask=(id)=>Tasks.findById(id);
exports.createTask=(data)=>Tasks.create(data);
exports.updateTask=(id,data)=>Tasks.findByIdAndUpdate(id,data);
exports.deleteTask=(id)=>Tasks.findByIdAndDelete(id);