const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Mentor = require("../models/mentorModel.js");
const Student = require("../models/studentModel.js");

const protect = expressAsyncHandler(async (req, res, next) => {
  // console.log(req.headers.authorization);  // to check our authorization header
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (
        req.body?.mentorDetails?.userType === "mentor" ||
        req.query?.userType === "mentor"
      ) {
        req.user = await Mentor.findById(decoded.id).select("-password");
        req.user = { ...req.user._doc, userType: "mentor" };
      } else if (
        req.body?.mentorDetails?.userType === "mentor" ||
        req.query?.userType === "student"
      ) {
        req.user = await Student.findById(decoded.id).select("-password");
        req.user = { ...req.user._doc, userType: "student" };
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = { protect };
