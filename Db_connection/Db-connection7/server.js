const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const connectDB = require("./db");

connectDB()

const app = express();

app.use("/ebooks/api", require("./routes/bookRoutes"))

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})