const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createSchedule,
  getSchedule,
  updateSchedule,
  deleteSchedule,
  deleteAllSchedule,
} = require("../controllers/scheduleController");
router.route("/create").post(protect, createSchedule);
router.route("/:userId").get(getSchedule);
router.route("/:scheduleId").put(protect, updateSchedule);
router.route("/:scheduleId").delete(protect, deleteSchedule);
router.route("/deleteAll/:userId").delete(protect, deleteAllSchedule);

module.exports = router;
