const tasksServices=require("../services/tasksServices");

exports.getTasks=async(req,res,next)=>{
    try{
        const tasks=await tasksServices.getAllTasks();
        res.json({tasks});
    } catch (err) {
        next(err)
    }
}
exports.getTask=async(req,res,next)=>{
    try{
        const task=await tasksServices.getTask(req.params.id);
        if(!task) res.status(404).json({message:"Task Not Found"});
        res.json({task});
    } catch(err){
        next(err);
    }
}

exports.createTask=async(req,res,next)=>{
    try{
        const attachments=req.files.map((eachFile)=>({
            filename:eachFile?.filename,
            originalname:eachFile?.originalname,
            mimetype:eachFile?.mimetype,
            size:eachFile?.size,
            path:eachFile?.path
        })) || [];
        const payload={
            ...req.body,
            attachments
        }
        const task=await tasksServices.createTask(payload);
        res.status(201).json({message:"Created Task Successfully"});
    } catch (err) {
        next(err);
    }
}
exports.updateTask=async(req,res,next)=>{
    try{
        const attachments=req.files.map((eachFile)=>({
            filename:eachFile?.filename,
            originalname:eachFile?.originalname,
            mimetype:eachFile?.mimetype,
            size:eachFile?.size,
            path:eachFile?.path
        })) || [];
        const payload={
            ...req.body,
            attachments
        }
        const task=await tasksServices.updateTask(req.params.id,payload);
        if(!task) res.status(404).json({message:"Task Not Found"});
        res.json({message:"Task Updated Successfully"});
    } catch (err) {
        next(err);
    }
}

exports.deleteTask=async(req,res,next)=>{
    try{
        const task=await tasksServices.deleteTask(req.params.id);
        if(!task) res.status(404).json({message:"Task Not Found"});
        res.json({message:"Task Deleted Successfully"});
    } catch(err){
        next(err);
    }
}