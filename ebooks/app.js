const express = require('express');
const ebook = [
    {
        id : '1',
        name : 'Book1'
    },
    {
        id : '2',
        name : 'Book2'
    }
];
//console.log(ebook);
const app = express();
app.get("/" , (req,res)=>{
    res.json({
        message: "Welcome to Home Page"
    })
})
app.get("/getall", (req,res)=>{
    //res.json(ebook)
    res.json({
        message: "List of books",
        data: ebook
    })
})
app.post("/addbook",(req,res)=>{
    let newbook={
        id : '3',
        name : 'Book3'
    }
    ebook.push(newbook);
    res.json({
        message : "Book added successfully",
        bookDetails : newbook
    })
})
app.delete("/delbook",(req,res)=>{
    const deletedbook = ebook.pop();
    res.json({
        message : "Book deleted successfully",
        bookDetails : deletedbook
    })
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running in ${port}`);
});