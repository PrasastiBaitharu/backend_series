const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./db");
const getAllUser = require("./controller/getUser");
const getAllProduct = require("./controller/getProducts");
connectDB();
const app = express();

app.get("/",(req,res)=>{
    res.json({
        "message" : "Welcome to users home page"
    })
})

app.get("/getAllUsers" , getAllUser)
app.get("/getAllProducts" , getAllProduct)

const port =process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`)
})