import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/submit", (req, res) => {
    console.log(req.body);
    return res.send("Ok, Recieved your data");
});

app.listen(8080, () =>{
    console.log(`Server started at port http://localhost:${port}`)
})