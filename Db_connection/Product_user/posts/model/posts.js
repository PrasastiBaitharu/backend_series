const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    userId:{
        type:String
    },
    id:{
        type:String
    },
    title:{
        type:String
    },
    body:{
        type:String
    }
})

module.exports = mongoose.model("posts" , postSchema);