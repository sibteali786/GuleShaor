const Student = require("./../models/studentModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Fetch all the Students
// @route   GET /api/students
// @access  Public
const getStudents = asyncHandler(async (req, res) => {
  const pageSize = 4; // 5 mentors per page
  const page = Number(req?.query?.pageNumber) || 1; // if np page is mentioned then page 1 is default
  const category = req?.query?.category || "";
  if (category === "Name") {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Student.countDocuments({ ...keyword });
    const students = await Student.find({ ...keyword })
      .skip(pageSize * (page - 1))
      .limit(pageSize); // gets all the mentors from the database
    res.json({ students, page, pages: Math.ceil(count / pageSize) });
  } else if (category === "Designation") {
    const count = await Student.aggregate([
      {
        $unwind: "$studentDetails",
      },
      {
        $unwind: "$studentDetails.designation",
      },
      {
        $match: {
          "studentDetails.designation": {
            $regex: req.query.keyword.trim(),
            $options: "i",
          },
        },
      },
      { $count: "Total" },
    ]);
    if (count.length === 0) {
      res.json({ students: [], page, pages: 0 });
    } else {
      const students = await Student.aggregate([
        {
          $unwind: "$studentDetails",
        },
        {
          $unwind: "$studentDetails.designation",
        },
        {
          $match: {
            "studentDetails.designation": {
              $regex: req.query.keyword.trim(),
              $options: "i",
            },
          },
        },
      ])
        .skip(pageSize * (page - 1))
        .limit(pageSize);

      res.json({ students, page, pages: Math.ceil(count[0].Total / pageSize) });
    }
  }
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

module.exports = { getStudents, getStudentById };
