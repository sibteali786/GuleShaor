const express = require("express");
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();
// async routes have promises returned by the schema in the database
router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
module.exports = router;

// TODO:https://gabrieleromanato.name/nodejs-create-a-simple-social-network-with-expressjs
