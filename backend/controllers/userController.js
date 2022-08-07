import asyncHandler from "express-async-handler";
import Student from "../models/studentModel.js";
import Mentor from "../models/mentorModel.js";
import generateToken from "../utils/generateToken.js";

// Define a type and on basis of it decide which schema to look for user existence.

// @desc    Auth user and get token
// @route   POST /api/user/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // we can use below line to access json data we send from the form or postman (initially)
  const { email, password, userType } = req.body;
  // res.send({email,password});     // checking if we are actually getting back same result what we are sending
  let user;
  if (userType === "mentor") {
    user = await Mentor.findOne({ email });
  } else {
    user = await Student.findOne({ email });
  }

  // if user exists then we have to match email and pass ( which is plain while the one in db is encrypted )
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userType,
      token: generateToken(user._id), // not defined till now
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const userType = req.user.userType;
  console.log(req.user);
  let user;
  if (userType === "mentor") {
    user = await Mentor.findById(req.user._id);
  } else {
    user = await Student.findById(req.user._id);
  }

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userType,
    });
  } else {
    res.status(404);
    throw new Error("Invalid Email or Password");
  }
});

export { authUser, getUserProfile };
