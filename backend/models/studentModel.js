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
        default: "Free",
      },
      username: {
        type: String,
        default: "john123",
      },
      designation: {
        type: String,
        default: "Jr. Web Developer",
      },
      image: {
        type: String,
        default: "",
      },
      interpersonal: [{ type: String, default: "" }],
      technical: [{ type: String, default: "" }],
      portfolioLink: { type: String, default: "" },
      category: {
        type: String,
        default: "",
      },
      otherImages: [
        {
          type: String,
          default: "",
        },
      ],
      preferredSubjects: [{ type: String, default: "" }],
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
    // The course ids which we are enrolled in
    about: {
      randomAchievement: {
        type: String,
        default: "",
      },
      details: {
        type: String,
        default:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora illo doloremque, a incidunt enim consequuntur at minima, eveniet minus repellat et ipsum ea voluptatem! Ea perferendis quibusdam maiores expedita.",
      },
      gender: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      country: {
        type: String,
        default: "",
      },
      dob: {
        type: String,
        default: "",
      },
      hobbies: [{ type: String, default: "" }],
      skills: [{ type: String, default: "" }],
      education: {
        degree: { type: String, default: "" },
        university: { type: String, default: "" },
      },
      achievements: [
        {
          title: {
            type: String,
            default: "",
          },
          description: {
            type: String,
            default: "",
          },
          issuedBy: {
            type: String,
            default: "",
          },
          issuedOn: {
            type: String,
            default: "",
          },
        },
      ],
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
    endorsement: [
      {
        mentorName: { type: String, default: "" },
        mentorImage: { type: String, default: "" },
        mentorFeedback: { type: String, default: "" },
        rating: { type: Number, default: 0 },
      },
    ],
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
