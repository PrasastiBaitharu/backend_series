const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db");
const getAllBooks = require("./controllers/bookController");
connectDB()
const app = express();
app.get("/getall" , getAllBooks)
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})