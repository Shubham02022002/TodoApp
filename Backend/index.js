import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db.js";


const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT;


connectDB();


app.get("/", (req, res) => {
    res.send('hi there')
})

app.post("/addTodo", (req, res) => {
    const { title, description, priority } = req.body;
    console.log(title, description, priority);
})
app.listen(PORT, () => {
    console.log(`Server is up on http://localhost:${PORT}`);
})