const moongose = require("mongoose");
const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database connection failed")
        process.exit(1)
    }
}
module.exports = connectDB;