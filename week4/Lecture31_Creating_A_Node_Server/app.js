const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("<h1>Jai shree ram</h1>");
    res.end();
});

server.listen(3000);