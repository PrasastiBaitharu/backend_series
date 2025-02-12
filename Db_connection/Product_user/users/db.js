const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database failed to connect");
        process.exit(0);
    }
}

module.exports = connectDB;