const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db");
const getAllProduct = require("./controller/getProducts");
connectDB()
const app = express();
app.get("/",(req,res)=>{
    res.json({
        "message" : "Welcome to home page of products"
    })
})
app.get("/getall" , getAllProduct)

port = process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})