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
            "message" : "Books not found",
            "success" : "false",
            "data" : allBooks
        })
    }
}

const getBooksById = async(req,res)=>{
    const bookId = req.params.id;
    console.log(bookId);
}

module.exports = {getAllBooks,getBooksById};