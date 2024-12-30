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
app.post("/addbook" , (req,res)=>{
    let newBook = {
        id:'3',
        name: "Book3"
    };
    ebook.push(newBook);
    res.json({
        message: "Book added successfully",
        bookDetail : newBook
    })
})
app.delete("/delbook",(req,res)=>{
    const delBook = ebook.pop();
    res.json({
        message : "Book deleted successfully",
        bookDetail: delBook
    })
});
app.get("/findBook/:id" , (req,res)=>{
    //console.log(req.params.id);
    const result = ebook.find((item)=>item.id===req.params.id);
    if(result){
        res.json({
            "message" : "Search is successful",
            "bookDetail": result
        })
    }else{
        res.json({
            "message" : "Record not found"
        })
    }
})

// app.get("/findBook/:name" , (req,res)=>{
//     console.log(req.params);
// })

const port = 4000;
app.listen(port, ()=>{
    console.log(`Server is running in ${port}`);
});