import  mongoose from 'mongoose';
import dotenv from 'dotenv'
import colors from 'colors'
import mentors from './data/mentors.js';
import Mentor from "./models/mentorModel.js";
import connectDB from './config/db.js';

dotenv.config();
connectDB();
// since dealing with mongoDB directly thus using async as returns promise 
const importData = async () => {
    try {
        // deleting all the collections so as to avoid importing things which are already in db
        await Mentor.deleteMany();

        // inserting users into database and storing whats returned into a variable 
        await Mentor.insertMany(mentors);   // users we created locally

        console.log("Data Imported".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);    // exit with failure
    }
}

    const destroyData = async () => {
        try {
            // deleting all the collections so as to avoid importing things which are already in db
            
            await Mentor.deleteMany();
        
            console.log("Data Destroyed".red.inverse);
            process.exit();
        } catch (error) {
            console.error(`${error}`.red.inverse);
            process.exit(1);    // exit with failure
        }
}


if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
} 