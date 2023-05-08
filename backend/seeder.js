const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const mentors = require("./data/mentors.js");
const Mentor = require("./models/mentorModel.js");
const connectDB = require("./config/db.js");
const Student = require("./models/studentModel.js");
const students = require("./data/student.js");
const Schedule = require("./models/scheduleModel.js");
const Events = require("./models/eventModel.js");

dotenv.config();
connectDB();
// since dealing with mongoDB directly thus using async as returns promise
const importData = async () => {
  try {
    // deleting all the collections so as to avoid importing things which are already in db
    await Mentor.deleteMany();
    await Student.deleteMany();
    await Schedule.deleteMany();
    await Events.deleteMany();
    // inserting mentors into database and storing whats returned into a variable
    const mentorsInDB = await Mentor.insertMany(mentors); // users we created locally
    // extracting the random mentor ids from Mentor model to assign to a student
    const sampleStudents = students.map((student) => {
      const randomMentors = [];
      let size = Math.floor(Math.random() * mentorsInDB.length) + 1;
      console.log("Size of the for loop : ", size);
      let loop = 0;
      while (loop < size) {
        let i = Math.floor(Math.random() * mentorsInDB.length);
        if (!randomMentors.includes(mentorsInDB[i]._id)) {
          randomMentors.push(mentorsInDB[i]._id);
        } else {
          continue;
        }
        loop++;
      }
      console.log(randomMentors);
      return { ...student, mentors: randomMentors }; // spreading to get everything back along with user as Admin user
    });

    await Student.insertMany(sampleStudents);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // exit with failure
  }
};

const destroyData = async () => {
  try {
    // deleting all the collections so as to avoid importing things which are already in db

    await Mentor.deleteMany();
    await Student.deleteMany();
    await Schedule.deleteMany();
    await Events.deleteMany();
    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // exit with failure
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
