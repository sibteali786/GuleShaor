const express = require("express");
const { getAllStudents } = require("../controllers/studentsMentors.js");

// async routes have promises returned by the schema of the db
const router = express.Router();

router.route("/:id").get(getAllStudents);
module.exports = router;
