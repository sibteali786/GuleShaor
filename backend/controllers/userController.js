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
        _id: user?._id,
        name: user?.name,
        username: user?.mentorDetails?.username,
        email: user?.email,
        image: user?.mentorDetails?.image,
        about: user?.about?.details,
        mobile: user?.about?.contact?.mobile,
        whatsapp: user?.about?.contact?.whatsapp,
        facebook: user?.about?.socialMedia?.facebook,
        instagram: user?.about?.socialMedia?.instagram,
        twitter: user?.about?.socialMedia?.twitter,
        linkedin: user?.about?.socialMedia?.linkedin,
        devto: user?.about?.socialMedia?.devto,
        github: user?.about?.socialMedia?.github,
        behance: user?.about?.socialMedia?.behance,
        dribble: user?.about?.socialMedia?.dribble,
        medium: user?.about?.socialMedia?.medium,
        school: user?.about?.education?.school?.name,
        schoolGrade: user?.about?.education?.school?.grade,
        college: user?.about?.education?.college?.name,
        collegeGrade: user?.about?.education?.college?.grade,
        university: user?.about?.education?.university?.name,
        gpa: user?.about?.education?.university?.gpa,
        cgpa: user?.about?.education?.university?.cgpa,
        degree: user?.about?.education?.university?.degree,
        userType,
        token: generateToken(user._id),
      });
    } else {
      res.json({
        _id: user?._id,
        name: user?.name,
        username: user?.studentDetails?.username,
        email: user?.email,
        image: user?.studentDetails?.image,
        about: user?.about?.details,
        mobile: user?.about?.contact?.mobile,
        whatsapp: user?.about?.contact?.whatsapp,
        facebook: user?.about?.socialMedia?.facebook,
        instagram: user?.about?.socialMedia?.instagram,
        twitter: user?.about?.socialMedia?.twitter,
        linkedin: user?.about?.socialMedia?.linkedin,
        devto: user?.about?.socialMedia?.devto,
        github: user?.about?.socialMedia?.github,
        behance: user?.about?.socialMedia?.behance,
        dribble: user?.about?.socialMedia?.dribble,
        medium: user?.about?.socialMedia?.medium,
        school: user?.about?.education?.school?.name,
        schoolGrade: user?.about?.education?.school?.grade,
        college: user?.about?.education?.college?.name,
        collegeGrade: user?.about?.education?.college?.grade,
        university: user?.about?.education?.university?.name,
        gpa: user?.about?.education?.university?.gpa,
        cgpa: user?.about?.education?.university?.cgpa,
        degree: user?.about?.education?.university?.degree,
        token: generateToken(user._id),
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
        userType,
      });
    } else {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        userType,
      });
    }
  } else {
    res.status(404);
    throw new Error("Invalid User Data");
  }
});

// Updating or creating profile for mentor and student
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const userType = req.user.userType;
  let user;
  if (userType === "mentor") {
    user = await Mentor.findById(req.user._id);
  } else if (userType === "student") {
    user = await Student.findById(req.user._id);
  }
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body?.password) {
      user.password = req.body?.password;
    }
    if (userType === "mentor") {
      user.mentorDetails = req.body?.mentorDetails || user?.mentorDetails;
      user.introVideo = req.body?.introVideo || user?.introVideo;
      // TODO:Mutate this array to retain previous values
      user.about = req.body?.about || user?.about;
      user.courses = req.body?.courses || user?.courses;
      user.certifications = req.body?.certifications || user?.certifications;
      user.experiences = req.body?.experiences || user?.experiences;
      user.aboutStudents = req.body?.aboutStudents || user?.aboutStudents;
      user.feedback = req.body?.feedback || user?.feedback;
    } else if (userType === "student") {
      user.studentDetails = req.body?.studentDetails || user?.studentDetails;
      user.introVideo = req.body?.introVideo || user?.introVideo;
      user.about.details = req.body?.about?.details || user?.about?.details;
      // TODO:Mutate this array to retain previous values
      user.about = req.body?.about || user?.about;
      user.certifications = req.body?.certifications || user?.certifications;
      user.experiences = req.body?.experiences || user?.experiences;
      user.experiences = req.body?.experiences || user?.experiences;
      user.endorsement = req.body?.endorsement || user?.endorsement;
    }

    const updatedUser = await user.save();
    if (userType === "mentor") {
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.mentorDetails.image,
        userType,
      });
    } else if (userType === "student") {
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.studentDetails.image,
        userType,
      });
    }
  }
});
module.exports = { authUser, getUserProfile, registerUser, updateUserProfile };
