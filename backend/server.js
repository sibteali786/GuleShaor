import express  from "express";
import path from 'path';
import dotenv from "dotenv"
import colors from 'colors';
import connectDB from "./config/db.js";
import mentorRoutes from "./routes/mentorRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import studentsMentorRoutes from "./routes/studentsMentorRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// for environment variables 
dotenv.config()

// initilize the database connection
connectDB()
// Initialize the express
const app = express();
//using productRoutes and userRoutes
app.use("/api/mentors",mentorRoutes)
app.use("/api/students",studentRoutes)
app.use("/api/getAllStudents",studentsMentorRoutes)
app.use(notFound)
app.use(errorHandler)

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'/frontend/build')))

  app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}else{
  app.get("/", (req, res) => {
    res.send("Api is Running......");
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))