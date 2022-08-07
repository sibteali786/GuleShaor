import Student from "./../models/studentModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all the Students
// @route   GET /api/students
// @access  Public
const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({}); // gets all the Students from the database
  res.json(students);
});

// @desc    Fetch a specific mentor
// @route   GET /api/students/:id
// @access  Public
const getStudentById = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404);
    throw new Error("Student not Found");
  }
});

export { getStudents, getStudentById };
