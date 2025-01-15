const ebooks = require("../model/ebooks")
const getAllBooks=async (req,res)=>{
    try {
        const allBooks = await ebooks.find({})
        res.json({
            "message" : "List of Books",
            "success" : "true",
            "data" : allBooks
        })
    } catch (error) {
        res.json({
            "message" : "No data found",
            "success" : "false",
            "data" : allBooks
        })
    }
}

module.exports = getAllBooks
