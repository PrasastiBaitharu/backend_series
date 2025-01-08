const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("./db");
connectDB();
app.get("/",(req,res)=>{
    res.json({
        "message" : "Welcome to the home page"
    })
})

const port = process.env.Port || 3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})