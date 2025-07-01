const tasksController=require("../controller/tasksController");
const express=require("express");
const upload=require("../middleware/upload");
const router=express.Router();

router.route("/")
        .get(tasksController.getTasks)
        .post(upload.array("attachments", 5) , tasksController.createTask);
router.route("/:id")
        .get(tasksController.getTask)
        .put(upload.array("attachments", 5) ,tasksController.updateTask)
        .delete(tasksController.deleteTask)

module.exports=router;