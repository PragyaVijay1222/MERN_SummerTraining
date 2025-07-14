import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = 8080;

app.get("/", (req, res) => {
    return res.send("Hi!, you have requested via GET methd on / route");
});

app.post("/", (req, res) => {
    return res.send("Hi, you have requested via POST method on / route");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});