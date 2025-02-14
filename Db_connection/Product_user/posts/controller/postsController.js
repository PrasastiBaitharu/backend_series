const posts = require("../model/posts");
const getAllPosts = async (req,res) =>{
    try {
        let getAll = await posts.find({});
        res.json({
            "message" : "Lists of posts",
            "success" : "true",
            "data" : getAll
        })
    } catch (error) {
        res.json({
            "message" : "Lists of posts",
            "success" : "false",
            "data" : getAll
        })
    }
}

module.exports = getAllPosts;