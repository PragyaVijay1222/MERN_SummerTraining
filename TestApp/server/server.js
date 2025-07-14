import express from "express";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import dotenvv from "dotenv";
import mongoose from "mongoose";
import { User } from "./model/UserSchema.js";
const app = express();
app.use(cors());
app.use(express.text());
app.use(express.json());

function homeGetRequestHandler(){

}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenvv.config({path : __dirname + "/.env"});

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to database"))
.catch(() => console.log("Error connecting to database"));

app.post("/", (req, res) => {
    console.log(req.body); // getting data from frontend.
    const data = fs.readFileSync(path.join(__dirname , "data.json"), "utf-8"); //path to the data file.
    res.send(JSON.parse(data)); // sending data to frontend.
});

app.post("/signup", async (req, res) =>{
    const {name, email, password} = req.body; //Destructuring
    const user = await User.findOne({email : email});

    if(user){
        console.log("User already present!");
        return res.status(400).json({message: "email/user already in use"});
    }else{
        const response = await User.create({
            name,
            email,
            password
        });

        return res.status(201).json({message: "New user added"});
    }
});

app.listen(8080);