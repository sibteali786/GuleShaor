const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcryptjs");
// Declare the Schema of the Mongo model
var studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
    studentDetails: {
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
    // The course ids which we are enrolled in
    about: {
      heading: { type: String, default: "" },
      details: { type: String, default: "" },
      hobbies: [{ type: String, default: "" }],
      skills: [{ type: String, default: "" }],
    },
    // all the mentors of the student
    mentors: [
      {
        type: mongoose.Schema.Types.ObjectId, // for objectId type
        ref: "Mentor", // refrencing Mentor model or relation between mentor and student
      },
    ],
  },

  {
    timestamps: true,
  }
);

// defining custom methods for user model
studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // do this when we are creating profile not updating it
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//Export the model
const student = mongoose.model("Student", studentSchema);
module.exports = student;
