const express = require('express');
const app = express();
const port = 3000;
app.get("/" , (req,res)=>{
    res.json({
        success: true,
        message: "Welcome yo home page"
    });
});
app.post("/register" , (req,res)=>{
    res.json({
        success: true,
        message: "Your data added successfully"
    });
});
app.put("/update" , (req,res)=>{
    res.json({
        success: true,
        message: "Your data updated successfully"
    });
});
app.delete("/delete" , (req,res)=>{
    res.json({
        success: true,
        message: "Your data deleted successfully"
    });
});
app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
});