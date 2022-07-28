import  mongoose  from "mongoose";
import colors from 'colors';
// its an async function as almost every mongoose function returns a promise
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
    }
}

export default connectDB;