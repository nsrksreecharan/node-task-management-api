const express=require("express");
const app=express();
const cors=require("cors");
const morgan=require("morgan");
const taskRoutes=require("./routes/tasksRoutes");
const errorHandler=require("./middleware/errorMiddleware");
const userRoutes=require("./routes/userRoutes");
const {protect}=require("./middleware/authMiddleware");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(errorHandler);

app.use("/api/tasks",protect,taskRoutes);
app.use("/api/auth",userRoutes);

module.exports=app;