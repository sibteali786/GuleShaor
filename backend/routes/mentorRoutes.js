import express from "express";
import { getMentorById, getMentors } from "../controllers/mentorController.js";

// async routes have promises returned by the schema of the db
const router = express.Router();

router.route("/").get(getMentors);
router.route("/:id").get(getMentorById); 
export default router;
