const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("I am from http server");
})
const port = 3000;
server.listen(port,()=>{
    console.log(`Server is now running in port ${port}`);
});