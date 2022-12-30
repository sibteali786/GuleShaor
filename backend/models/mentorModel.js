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
        default: "Free",
      },
      username: {
        type: String,
        default: "",
      },
      designation: {
        type: String,
        default: "Charted Accountant",
      },
      image: {
        type: String,
        default: "",
      },
      interpersonal: [{ type: String, default: "" }],
      technical: [{ type: String, default: "" }],
      portfolioLink: { type: String, default: "" },
      otherImages: [
        {
          type: String,
          default: "",
        },
      ],
      preferredSubjects: [{ type: String, default: "Science" }],
    },
    introVideo: {
      video: {
        type: String,
        default: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      },
      videoPoster: { type: String, default: "/images/Rectangle5.jpg" },
    },
    certifications: [
      {
        name: {
          type: String,
          default: "",
        },
        issuingOrg: {
          type: String,
          default: "",
        },
        issueDate: {
          type: String,
          default: "",
        },
        expirationDate: {
          type: String,
          default: "",
        },
        credentialId: {
          type: String,
          default: "",
        },
        credentialUrl: {
          type: String,
          default: "",
        },
      },
    ],
    // TODO: add a field for the mentor's availability
    // TODO: Course fields have to be added or improved
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
      details: {
        type: String,
        default: "",
      },
      hobbies: [{ type: String, default: "" }],
      skills: [{ type: String, default: "" }],
      education: {
        school: {
          name: { type: String, default: "" },
          grade: { type: String, default: "" },
        },
        college: {
          name: { type: String, default: "" },
          grade: { type: String, default: "" },
        },
        university: {
          name: { type: String, default: "" },
          degree: { type: String, default: "" },
          cgpa: { type: String, default: "" },
          gpa: { type: String, default: "" },
        },
      },
      contact: {
        mobile: { type: String, default: "" },
      },
      socialMedia: {
        facebook: { type: String, default: "" },
        twitter: { type: String, default: "" },
        instagram: { type: String, default: "" },
        linkedin: { type: String, default: "" },
        medium: { type: String, default: "" },
        devto: { type: String, default: "" },
        dribble: { type: String, default: "" },
        behance: { type: String, default: "" },
        github: { type: String, default: "" },
      },
    },
    experiences: [
      {
        company: { type: String, default: "" },
        employmentType: { type: String, default: "" },
        title: { type: String, default: "" },
        startDate: { type: String, default: "" },
        endDate: { type: String, default: "" },
        description: { type: String, default: "" },
        location: { type: String, default: "" },
        industry: { type: String, default: "" },
        topSkills: [
          {
            name: { type: String, default: "" },
            howUsed: { type: String, default: "" },
          },
        ],
        media: [
          {
            link: { type: String, default: "" },
          },
        ],
      },
    ],
    aboutStudents: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora illo doloremque, a incidunt enim consequuntur at minima, eveniet minus repellat et ipsum ea voluptatem! Ea perferendis quibusdam maiores expedita.",
    },
    timeSlots: [
      {
        date: { type: String, default: "" },
        time: { type: String, default: "" },
      },
    ],
    appointments: [
      {
        subject: { type: String, default: "" },
        description: { type: String, default: "" },
        date: { type: String, default: "" },
        startTime: { type: String, default: "" },
        endTime: { type: String, default: "" },
        studentId: { type: String, default: "" },
      },
    ],
    feedback: [
      {
        studentName: { type: String, default: "" },
        studentImage: { type: String, default: "" },
        studentFeedback: { type: String, default: "" },
        rating: { type: Number, default: 0 },
      },
    ],
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
