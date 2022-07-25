import express from "express";
import { getStudentById, getStudents } from "../controllers/studentController.js";

// async routes have promises returned by the schema of the db
const router = express.Router();

router.route("/").get(getStudents);
router.route("/:id").get(getStudentById); 

export default router;
