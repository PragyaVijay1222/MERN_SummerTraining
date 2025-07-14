import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 8080;
app.use(cors());

app.get('/data', (req, res) => {
    fs.readFile('ClassProjects/04-07-25/e-commerce/server/data.json', 'utf8', (err, jsonData) => {
        if(err) {
            res.status(500).send("Error reading file");
        }else{
            res.json(JSON.parse(jsonData));
            console.log(jsonData);
        }
    });
});

app.listen(port , () => {
    console.log(`Server is running in ${port}`);
});