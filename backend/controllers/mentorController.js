const Mentor = require("./../models/mentorModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Fetch all the mentors
// @route   GET /api/mentors
// @access  Public
const getMentors = asyncHandler(async (req, res) => {
  const pageSize = 4; // 5 mentors per page
  const page = Number(req?.query?.pageNumber) || 1; // if np page is mentioned then page 1 is default
  const category = req?.query?.category || "";
  // for name search
  if (category === "Name") {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Mentor.countDocuments({ ...keyword });
    const mentors = await Mentor.find({ ...keyword })
      .skip(pageSize * (page - 1))
      .limit(pageSize); // gets all the mentors from the database
    res.json({ mentors, page, pages: Math.ceil(count / pageSize) });
  } else if (category === "Designation") {
    const count = await Mentor.aggregate([
      {
        $unwind: "$mentorDetails",
      },
      {
        $unwind: "$mentorDetails.designation",
      },
      {
        $match: {
          "mentorDetails.designation": {
            $regex: req.query.keyword.trim(),
            $options: "i",
          },
        },
      },
      { $count: "Total" },
    ]);
    if (count.length === 0) {
      res.json({ mentors: [], page, pages: 0 });
    } else {
      const mentors = await Mentor.aggregate([
        {
          $unwind: "$mentorDetails",
        },
        {
          $unwind: "$mentorDetails.designation",
        },
        {
          $match: {
            "mentorDetails.designation": {
              $regex: req.query.keyword.trim(),
              $options: "i",
            },
          },
        },
      ])
        .skip(pageSize * (page - 1))
        .limit(pageSize);

      res.json({ mentors, page, pages: Math.ceil(count[0].Total / pageSize) });
    }
  }
});

// @desc    Fetch a specific mentor
// @route   GET /api/mentors/:id
// @access  Public
const getMentorById = asyncHandler(async (req, res) => {
  const mentor = await Mentor.findById(req.params.id);
  if (mentor) {
    res.json(mentor);
  } else {
    res.status(404);
    throw new Error("Mentor not Found");
  }
});

// @desc    Create Time Slots
// @route   POST /api/mentors/addtimeslots
// @access  Public
const addTimeSlots = asyncHandler(async (req, res) => {
  const mentor = await Mentor.findById(req.body.id);
  if (mentor) {
    mentor.timeSlots = req.body?.timeSlots;
    const updatedMentor = await mentor.save();
    res.json({
      _id: updatedMentor?._id,
      name: updatedMentor?.name,
      email: updatedMentor?.email,
      timeSlots: updatedMentor?.timeSlots,
    });
  } else {
    res.status(404);
    throw new Error("Mentor not Found");
  }
});

module.exports = { getMentors, getMentorById, addTimeSlots };
