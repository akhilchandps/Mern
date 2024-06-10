import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connecttoMongoDB.js";
const app = express();


dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

app.get('/', (req,res) =>{

    //root route https://localhost:5001/
    res.send("Hello world");
});



app.listen(PORT, () =>{

    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
});