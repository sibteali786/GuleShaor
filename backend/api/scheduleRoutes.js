const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createSchedule,
  getSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");
router.route("/create").post(protect, createSchedule);
router.route("/:userId").get(protect, getSchedule);
router.route("/:scheduleId").put(protect, updateSchedule);
router.route("/:scheduleId").delete(protect, deleteSchedule);

module.exports = router;
