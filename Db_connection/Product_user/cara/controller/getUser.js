const users = require("../model/users");
const getAllUser = async (req,res)=>{
    try {
        allUsers = await users.find({})
        res.json({
            "message": "List of users",
            "success" : "true",
            "data" : allUsers
        })
    } catch (error) {
        res.json({
            "message": "List of users",
            "success" : "false",
            "data" : allUsers
        })
    }
}

module.exports = getAllUser;