import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/db.js";
import { app } from "./app.js";

// const app = express();
app.use(bodyParser.json());

dotenv.config({ path: './env' });
const PORT = process.env.PORT || 3000;


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is up on http://localhost:${PORT}`);
        })
    })
    .catch((err) => {
        console.error("MongoDB connection faild!!", err);
    });


// app.get("/api/todos", (req, res) => {
//     res.send([]);
// })

// app.post("/api/addTodo", (req, res) => {
//     const { title, description, priority } = req.body;
//     console.log(title, description, priority);
// })

