const homePage =  (req ,res)=>{
    res.send("I am home page");
}
const productPage = (req , res)=>{
    res.send("I am product page");
}

const aboutPage = (req , res)=>{
    res.send("I am about page");
}
const contactPage = (req , res)=>{
    res.send("I am contact page");
}
module.exports = {homePage , productPage , aboutPage , contactPage};