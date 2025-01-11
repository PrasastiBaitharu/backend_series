const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const connectDB = require("./db");
const getAllBooks = require("./controllers/bookController");
const app = express()
connectDB()

app.get("/getall",getAllBooks)

const PORT = process.env.PORT ||3000;
app.listen(PORT , ()=>{
    console.log(`Server is running in ${PORT}`)
})