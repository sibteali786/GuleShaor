import express  from "express";
import users from './data/mentors.js'
import dotenv from "dotenv"
import connectDB from "./config/db.js";

// for environment variables 
dotenv.config()

// initilize the database connection
connectDB()
// Initialize the express
const app = express();
app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.get('/api/users',(req,res)=>{
    res.json(users);
})

app.get('/api/users/:id',(req,res)=>{
    const user = users.find(p => p.id === req.params.id)
    res.send(user) 
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))