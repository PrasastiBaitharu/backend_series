const ebooks = require("../model/ebooks")
const getAllBooks = async(req,res) =>{
    try {
        let allBooks = await ebooks.find({});
        res.json({
            "message" : "List of all books",
            "success" : "true",
            "data" : allBooks
        })
    } catch (error) {
        res.json({
            "message" : "List of all books",
            "success" : "false",
            "data" : allBooks
        })
    }
}

module.exports = getAllBooks;