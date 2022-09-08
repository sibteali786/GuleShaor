const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db.js");
const mentorRoutes = require("./routes/mentorRoutes.js");
const studentRoutes = require("./routes/studentRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const studentsMentorRoutes = require("./routes/studentsMentorRoutes.js");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");
// for environment variables
dotenv.config();

// initilize the database connection
connectDB();
// Initialize the express
const app = express();
app.use(express.json()); // Allows to accept json data in the body of request
//using productRoutes and userRoutes
app.use("/api/users", userRoutes);
app.use("/api/mentors", mentorRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/getAllStudents", studentsMentorRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is Running......");
  });
}
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
