import express  from "express";
import users from './data/users.js'
import dotenv from "dotenv"

// for environment variables 
dotenv.config()
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
console.log(process.env.PORT);
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))