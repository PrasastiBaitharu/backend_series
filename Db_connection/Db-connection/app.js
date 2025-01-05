const dotenv = require("dotenv");
dotenv.config()
const express = require("express");

const connectDB = require("./db");
connectDB()
const app = express();

app.get("/" , (req,res)=>{
    res.json({
        "message" : "welcome to home page"
    })
    console.log("Welcome to home page");
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})