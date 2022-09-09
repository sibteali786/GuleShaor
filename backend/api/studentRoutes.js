const express = require("express");
const {
  getStudentById,
  getStudents,
} = require("../controllers/studentController.js");

// async routes have promises returned by the schema of the db
const router = express.Router();

router.route("/").get(getStudents);
router.route("/:id").get(getStudentById);

module.exports = router;
