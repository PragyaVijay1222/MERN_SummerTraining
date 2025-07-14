// const fs = require("fs");

// let data = fs.readFileSync(__dirname + "/data.txt", "utf8");

// console.log(data);

// console.log("After reading the file I am here");

// fs.appendFileSync(__dirname + "/data.txt", "This is the new line inserted");

// data = fs.readFileSync(__dirname + "/data.txt", "utf8");
// console.log(data);

// const http = require("http");

// console.log(http);

// const server = http.createServer((req, res) => {
//     console.log(req);
//     console.log(res);
//     res.end("<h1>Hi this is a message from the server </h1>")
// });

// server.listen(8080, () => {
//     console.log("server started at your port 8080");
// })

//Dynamic routing 

const http = require("http");


const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/plain");
    if(req.url === "/") {
        if(req.method === "GET") return res.end("You have requeested on home route with GET method");
        else if(req.method === "POST") return res.end("You have requsted on home route with POST method");
    }
    else if(req.url === "/about") return res.end("about page");
    return res.end("page not found!");
});

server.listen(8080, () => {
    console.log("server started at your port 8080");
})