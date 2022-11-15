const Student = require("./../models/studentModel.js");
const asyncHandler = require("express-async-handler");
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({
    mentors: {
      $all: [req.params.id],
    },
  });
  if (students) {
    res.json(students);
  } else {
    res.status(404);
    throw new Error("No Students Found");
  }
});

module.exports = { getAllStudents };
