const express = require('express');
const {homePage , productPage , aboutPage , contactPage} = require('./controllers/controllers')
const app = express();//express() is a constructor
const port = 3000;

//Routes
app.get("/" , homePage);
app.get("/product" , productPage);
app.get("/about" , aboutPage);
app.get("/contact" , contactPage);

app.listen(port , ()=>{
    console.log(`Server is running in ${port}`);
})
