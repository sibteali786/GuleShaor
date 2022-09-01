import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
// async routes have promises returned by the schema in the database
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
export default router;

// TODO:https://gabrieleromanato.name/nodejs-create-a-simple-social-network-with-expressjs
