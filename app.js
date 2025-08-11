const express=require("express");
const app=express();
const cors=require("cors");
const morgan=require("morgan");
const taskRoutes=require("./routes/tasksRoutes");
const errorHandler=require("./middleware/errorMiddleware");
const userRoutes=require("./routes/userRoutes");
const {protect}=require("./middleware/authMiddleware");

const allowedOrigins = [
  'http://localhost:5173',
  'https://nsrksreecharan.github.io'
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(errorHandler);

app.use("/api/tasks",protect,taskRoutes);
app.use("/api/auth",userRoutes);

module.exports=app;