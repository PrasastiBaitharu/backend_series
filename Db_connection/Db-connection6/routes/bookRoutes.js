const express = require("express");
const {getAllBooks,getBooksById} = require("../controllers/bookController");
const router = express.Router();
router.get("/getall" , getAllBooks)
router.get("/getBooksById/:id" , getBooksById)
module.exports = router