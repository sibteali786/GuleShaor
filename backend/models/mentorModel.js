import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// Declare the Schema of the Mongo model
const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    mentorDetails: {
      userType: {
        type: String,
      },
      username: {
        type: String,
      },
      career: {
        type: String,
      },
      profilePicture: {
        type: String,
      },
      otherImages: [
        {
          type: String,
        },
      ],
      favouriteSubjects: [{ type: String }],
    },
    introVideo: {
      video: { type: String },
      videoPoster: { type: String },
    },
    courses: [
      {
        name: { type: String, required: true },
        poster: { type: String, required: true },
        details: { type: String, required: true },
        description: {
          chapters: { type: String, required: true },
          hours: { type: String, required: true },
          type: { type: String, required: true },
        },
      },
    ],
    about: {
      heading: { type: String },
      details: { type: String },
      hobbies: [{ type: String }],
      skills: [{ type: String }],
    },
    studentDescription: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
// defining custom methods for user model
mentorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Export the model
const mentor = mongoose.model("Mentor", mentorSchema);
export default mentor;
