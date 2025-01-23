const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
    id:{
        type : String
    },
    name:{
        type: String
    }
})

module.exports = mongoose.model("ebooks" , BookSchema);