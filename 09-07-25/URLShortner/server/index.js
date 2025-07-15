import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import shortid from "shortid";
import { v4 as uuidv4} from "uuid";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use(cookieParser());
const PORT = 8080;

mongoose.connect('your_mongoDB_token',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));

// const urlSchema = mongoose.Schema({
//     longURL:{
//         type : String,
//         required: true
//     },
//     shortID:{
//         type: String,
//         required: true
//     }
// })

// const URL = mongoose.model("urls", urlSchema);

// app.post("/", async(req, res) =>{
//     const shortID = shortid.generate();
//     await URL.create({
//         longURL: req.body.longURL,
//         shortID: shortID
//     });
//     return res.json({shortURL: `http://localhost:${PORT}/${shortID}`});
// })

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
       type: String,
       required: true 
    }
}, { timestamps: true});

const user = mongoose.model("users", userSchema);

const userState = {};

app.get("/auth-check", (req, res) => {
    const uid = req.cookies?.uid;
    if (!uid || !userState[uid]) {
        console.log("No cookies found in this request");
        return res.status(400).json({ message: "User isn't logged in" });
    }

    console.log(uid);
    console.log(userState[uid].userName);
    return res.status(200).json({ message: "User is logged in" });
});

app.post("/signup", async(req,res) => {
    // console.log(req.body);

    const {username, email, password} = req.body;

    const existingUser = await user.findOne({ userName: username});

    if (!existingUser){
        const newUser = await user.create({
        userName : username,
        email,
        password,
     });

    const uid = uuidv4();

    res.cookie("uid", uid,{
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24*60*60*1000
    });
    
    userState[uid] = newUser;

    console.log(userState);
    }else{
        return res.status(400).json({message: "User already exists"});
    }
    return res.status(201).json({ message: "Created new user"});
})

app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`);
});
