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
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running in ${port}`);
});