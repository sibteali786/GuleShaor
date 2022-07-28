import mongoose from "mongoose"; // Erase if already required

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
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      career: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        required: true,
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
    // The course ids which we are enrolled in
    about: {
      heading: { type: String },
      details: { type: String },
      hobbies: [{ type: String }],
      skills: [{ type: String }],
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

//Export the model
const student = mongoose.model("Student", studentSchema);
export default student;
