import express from "express";
import { getAllStudents } from "../controllers/studentsMentors.js";


// async routes have promises returned by the schema of the db
const router = express.Router();

router.route("/:id").get(getAllStudents);
export default router;