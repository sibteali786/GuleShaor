const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel.js");
const Mentor = require("../models/mentorModel.js");
const generateToken = require("../utils/generateToken.js");

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
    if (userType === "mentor") {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.mentorDetails.image,
        token: generateToken(user._id), // not defined till now
        userType,
      });
    } else {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.studentDetails.image,
        token: generateToken(user._id), // not defined till now
        userType,
      });
    }
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const userType = req.user.userType;
  let user;
  if (userType === "mentor") {
    user = await Mentor.findById(req.user._id);
  } else {
    user = await Student.findById(req.user._id);
  }

  if (user) {
    if (userType === "mentor") {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.mentorDetails.image,
        userType,
      });
    } else {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.studentDetails.image,
        userType,
      });
    }
  } else {
    res.status(404);
    throw new Error("Invalid Email or Password");
  }
});

// @desc    Register a new User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // we can use below line to access json data we send from the form or postman (initially)
  const { name, email, password, userType } = req.body;

  let userExists;
  if (userType === "mentor") {
    userExists = await Mentor.findOne({ email });
  } else {
    userExists = await Student.findOne({ email });
  }

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }
  // if user does not exist then we can create a new user
  let user;
  if (userType === "mentor") {
    user = await Mentor.create({
      name,
      email,
      password,
    });
  } else {
    user = await Student.create({
      name,
      email,
      password,
    });
  }

  if (user) {
    if (userType === "mentor") {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
  } else {
    res.status(404);
    throw new Error("Invalid User Data");
  }
});

module.exports = { authUser, getUserProfile, registerUser };
