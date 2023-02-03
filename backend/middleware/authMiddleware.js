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
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET,
        function (err, decoded) {
          if (err) {
            console.log(err);
            throw new Error(`Not Authorized and ${err}`);
          }
          return decoded;
        }
      );
      if (
        req.body?.userDetails?.userType === "mentor" ||
        req.query?.userType === "mentor"
      ) {
        req.user = await Mentor.findById(decoded.id).select("-password");
        req.user = { ...req.user._doc, userType: "mentor" };
      } else if (
        req.body?.userDetails?.userType === "student" ||
        req.query?.userType === "student"
      ) {
        req.user = await Student.findById(decoded.id).select("-password");
        req.user = { ...req.user._doc, userType: "student" };
      } else {
        req.body = {
          ...req.body,
          id: decoded?.id,
        };
      }
      next();
    } catch (error) {
      res.status(401);
      throw new Error(`Not Authorized, ${error}`);
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = { protect };
