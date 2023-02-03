const cors = require("cors");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");
const mentorRoutes = require("./api/mentorRoutes.js");
const studentRoutes = require("./api/studentRoutes.js");
const userRoutes = require("./api/userRoutes.js");
const uploadRoutes = require("./api/uploadRoutes.js");
const studentsMentorRoutes = require("./api/studentsMentorRoutes.js");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");
// for environment variables
dotenv.config();

// initilize the database connection
connectDB();
// Initialize the express
const app = express();
app.use(express.json()); // Allows to accept json data in the body of request
app.use(cors());
//using productRoutes and userRoutes
app.use("/api/users", userRoutes);
app.use("/api/mentors", mentorRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/getAllStudents", studentsMentorRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/", (req, res) => {
  res.send("Api is Running......");
});
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads"))); // * so as to access it in browser
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
