const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db");
const getAllUser = require("./controller/getUser");
connectDB();
const app = express();

app.get("/",(req,res)=>{
    res.json({
        "message" : "Welcome to users home page"
    })
})

app.get("/getall" , getAllUser)

const port =process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`)
})