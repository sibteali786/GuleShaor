const express = require("express");
const {
  getMentorById,
  getMentors,
  addTimeSlots,
} = require("../controllers/mentorController.js");
const { protect } = require("../middleware/authMiddleware.js");
// async routes have promises returned by the schema of the db
const router = express.Router();
router.route("/").get(getMentors);
router.route("/:id").get(getMentorById);
router.route("/addtimeslots").post(protect, addTimeSlots);
module.exports = router;
