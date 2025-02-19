const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db");
const getAllPosts = require("./controller/postsController");
connectDB()
const app = express()
app.get("/" , (req,res)=>{
    res.json({
        "message" : "Welcome to posts"
    })
})
app.get("/getall" , getAllPosts)
const port = process.env.PORT||3000;
app.listen(port, ()=>{
    console.log(`Server is running in ${port}`)
})