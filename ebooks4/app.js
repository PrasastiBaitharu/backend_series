let ebook = [
    {
        "id" : "1",
        "name" : "Book 1"
    },
    {
        "id" : "2",
        "name" : "Book 2"
    }
]
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
//Routes
app.get("/" , (req,res)=>{
    res.json({
        "message" : "Welcome to Ebooks"
    })
})

app.get("/getall",(req,res)=>{
    res.json({
        "message" : "List of Ebooks",
        "data" : ebook
    })
})

app.get("/findBook/:args" , (req,res)=>{
    let searchValue = req.params.args;
    // console.log(searchValue)

    /*const result = ebook.find((item)=>{
        // console.log(item.id);
        // console.log(item.name);
        if(item.id===searchValue){
            // res.json({
            //     "message" : "Search is successful",
            //     "bookDetail" : result
            // })
            console.log("Id you have given");
            console.log(item);
        }else if(item.name === searchValue){
            // res.json({
            //     "message" : "Search is successful",
            //     "bookDetail" : result
            // })
            console.log("Name you have given");
            console.log(item);
        }else{
            res.json({
                "message" : "Record not found"
            })
        }
    })*/
   const result = ebook.find((item)=>{
        if(item.id===searchValue){
            return item;            
        }else if(item.name === searchValue){
            return item;
        }else{
            return 0;
        }
    })
    if(result !=0){
        res.json({
                "message" : "Search is successful",
                "bookDetail" : result
        })
    }else{
        res.json({
            "message" : "Search is unsuccessful",
            "bookDetail" : "Not available"
    })
    }
})

app.post("/addBook" , (req,res)=>{
    const newBook = req.body;
    ebook.push(newBook);
    res.json({
        "message" : "Book added successfully",
        "bookDetail" : newBook
    })
})

app.delete("/delbook",(req,res)=>{
    let delBook = ebook.pop();
    res.json({
        "message" : "Record is deleted successfully",
        "bookDetail": delBook
    })
})

app.delete("/delBook/:arg",(req,res)=>{
    let searchDel = req.params.arg;
    const result = ebook.find((item)=>{
        if(searchDel === item.id){
            delete ebook
            return item;
        }else if(searchDel === item.name){
            ebook.pop(item);
            return item;
        }else{
            return 0
        }
    })
    if(result!=0){

        res.json({
            "message" : "Record is deleted successfully",
            "bookDetail": result
        })
    }else{
        res.json({
            "message" : "Record not found"
        })
    }
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})