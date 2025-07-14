import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {
            "content-type":"text/html"
        });

        const data = fs.readFileSync(__dirname + "/public/index.html", "utf-8");

        return res.end(data);
    } else if(req.url === "/about"){
        console.log("This request is from our /about path");
    } else if(req.url === "/contact"){
        console.log("This request is from out /contact path");
    }
});

server.listen(8080, () =>{
    console.log("Server is running at port 8080");
})