import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://pragyavijay20318:liSykcBzBnyagA58@cluster0.g7t5xga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Guest User"
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res)=>{
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({message: 'User created'});

});

app.listen(3000, () => console.log('Server running on port 3000'));