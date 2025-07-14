import express from "express";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.post("/signup", (req, res) => {
    const userData = fs.readFileSync(path.join(__dirname, "users.json"), "utf8");
    const users = JSON.parse(userData);

    users.forEach((user) => {
        if(user.username === username){
            return res.status(409).json({message: "Username already taken"});
        }else if(user.email === email){
            return res.status(409).json({message: "Email alreday exists"});
        }
    })

    console.log(users);

    users.push({
        username: username,
        email: email,
        password: password
    });
    console.log(req.body);

    fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(users));

    return res.status(201).json({message: "New user created"});
})

app.post("/login", (req, res) => {
    const userData = fs.readFileSync(path.join(__dirname, "users.json"), "utf8");

    const users = JSON.parse(userData);

    let message = "Email not found";

    users.forEach((user) => {
        if(user.email === email){
            if(user.password === password){
                message = "Login Successful";
            }else{
                message = "Wrong password";
            }

            return;
        }
    });

    return res.json({message: message});
})

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080");
})