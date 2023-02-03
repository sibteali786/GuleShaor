const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
        default: "",
      },
      username: {
        type: String,
        default: "",
      },
      career: {
        type: String,
        default: "",
      },
      profilePicture: {
        type: String,
        default: "",
      },
      otherImages: [
        {
          type: String,
          default: "",
        },
      ],
      favouriteSubjects: [{ type: String, default: "" }],
    },
    introVideo: {
      video: { type: String, default: "" },
      videoPoster: { type: String, default: "" },
    },
    courses: [
      {
        name: { type: String, default: "" },
        poster: { type: String, default: "" },
        details: { type: String, default: "" },
        description: {
          chapters: { type: String, default: "" },
          hours: { type: String, default: "" },
          type: { type: String, default: "" },
        },
      },
    ],
    about: {
      heading: { type: String, default: "" },
      details: { type: String, default: "" },
      hobbies: [{ type: String, default: "" }],
      skills: [{ type: String, default: "" }],
    },
    studentDescription: {
      type: String,
      default: "",
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

// encrypting password entered by user before saving it
mentorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // do this when we are creating profile not updating it
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//Export the model
const mentor = mongoose.model("Mentor", mentorSchema);
module.exports = mentor;
