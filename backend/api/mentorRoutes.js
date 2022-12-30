const express = require("express");
const {
  getMentorById,
  getMentors,
  addTimeSlots,
  addAppointments,
} = require("../controllers/mentorController.js");
const { protect } = require("../middleware/authMiddleware.js");
// async routes have promises returned by the schema of the db
const router = express.Router();
router.route("/").get(getMentors);
router.route("/:id").get(getMentorById);
router.route("/addtimeslots").post(protect, addTimeSlots);
router.route("/addAppointments").post(protect, addAppointments);
module.exports = router;
