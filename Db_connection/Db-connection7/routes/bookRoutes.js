const express = require("express");
const {getAllBooks,getBooksById, getBooksByChoice} = require("../controllers/bookController");
const router = express.Router();
router.get("/getall" , getAllBooks)
router.get("/getBooksById/:id" , getBooksById)
router.get("/getBooksByChoice/:id" , getBooksByChoice)
module.exports = router