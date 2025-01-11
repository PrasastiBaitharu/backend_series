const ebooks = [
    {
        "id" : "1",
        "name" : "Book 1"
    },
    {
        "id" : "2",
        "name" : "Book 2"
    },
    {
        "id" : "3",
        "name" : "Book 3"
    }
]

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
app.use(express.json())
// const connectDB = require("./db");
// connectDB();
app.get("/",(req,res)=>{
    res.json({
        "message" : "Welcome to the home page"
    })
})

app.get("/getall" , (req,res)=>{
    res.json({
        "message" : "List of ebooks",
        "data" : ebooks
    })    
})

app.get("/findBook/:args",(req,res)=>{
    let searchValue = req.params.args;
    let result = ebooks.find((item)=>{
        if(item.id === searchValue){
            return item;
        }else if(item.name === searchValue){
            return item;
        }else{
            return 0;
        }
    })
    if(result!=0){
        res.json({
            "message" : "Record found sucessfully",
            "data" : result
        })
    }else{
        res.json({
            "message" : "Record not found"
        })
    }
})

app.post("/addBook",(req,res)=>{
    const newBook = req.body;
    ebooks.push(newBook);
    res.json({
        "message" : "Record added successfully",
        "data" : newBook
    })
})

app.delete("/delBook",(req,res)=>{
    const delBook = ebooks.pop();
    res.json({
        "message" : "Record deleted successfully",
        "data" : delBook
    })
})

// app.put("/updateBook/:args",(req,res)=>{
//     let searchValue = req.params.args;
//     let result = ebooks.find((item)=>{
//         if(item.id === searchValue){
//             let item = item.id
//             let updt = item.push(req.body);
//             return updt;
//         }else if(item.name === searchValue){
//             let updt = ebooks.push(req.body);
//             return updt;
//         }else{
//             return 0;
//         }
//     })
//     if(result!=0){
//         res.json({
//             "message" : "Record updated successfully",
//             "data" : result
//         })
//     }else{
//         res.json({
//             "message" : "Record is not updated"
//         })
//     }
// })


const port = process.env.Port || 3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})