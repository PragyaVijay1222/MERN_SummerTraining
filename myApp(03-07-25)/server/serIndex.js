import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 8080;

app.get('/', (req, res) => {
    res.json('Hello, this line is coming from the express file!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})