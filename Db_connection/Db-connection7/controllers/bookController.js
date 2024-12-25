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
    try {
        const bookId = req.params.id;
        console.log(bookId)
        let allBook = await ebooks.findById(bookId);
        res.json({
            "message" : "Books details",
            "success" : "true",
            "data" : allBook
        })
    } catch (error) {
        res.json({
            "message" : "Books details",
            "success" : "False",
            
        })
    }
    
}


const getBooksByChoice = async(req,res)=>{
    try {
        const bookId = req.params.id;
        console.log(bookId)
        let allBook = await ebooks.find({id : bookId});
        console.log(allBook)
        res.json({
            "message" : "Books details",
            "success" : "true",
            "data" : allBook
        })
    } catch (error) {
        res.json({
            "message" : "Books details",
            "success" : "False"
            
        })
    }
    
}

module.exports = {getAllBooks,getBooksById,getBooksByChoice};