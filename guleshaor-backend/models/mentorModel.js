import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  mentorDetails: {
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
    favouriteSubjects:[{type:String}],
  },
  introVideo: {
    video: { type: String },
    videoPoster: { type: String },
  },
  courses: [
    {
        name: { type: String, required:true },
        poster: { type: String , required:true},
        details:{type:String,required:true},
        description:{
          chapters:{type:String, required:true},
          hours:{type:String,required:true},
          type:{type:String,required:true}
        }
    }
    ],
  about:{
    heading:{type:String},
    details:{type:String},
    hobbies:[{type:String}],
    skills:[{type:String}]
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
    required: true,
    default:false
  },
},{
  timestamps:true
});

//Export the model
const mentor = mongoose.model("Mentor", mentorSchema);
export default mentor;
