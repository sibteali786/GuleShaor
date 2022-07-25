import Mentor from "./../models/mentorModel.js";
import asyncHandler from 'express-async-handler';


// @desc    Fetch all the mentors 
// @route   GET /api/mentors
// @access  Public
const getMentors = asyncHandler(async(req,res)=>{
    const mentors = await Mentor.find({})    // gets all the mentors from the database
    res.json(mentors);
})


// @desc    Fetch a specific mentor 
// @route   GET /api/mentors/:id
// @access  Public
const getMentorById = asyncHandler(async (req,res) => {
    const mentor = await Mentor.findById(req.params.id);
    if (mentor) {
        res.json(mentor)
    } else {
        res.status(404)
        throw new Error('Mentor not Found')
    }
}) 

export {
    getMentors,
    getMentorById
}