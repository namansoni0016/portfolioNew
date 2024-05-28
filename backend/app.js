import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected!");
}).catch((err) => {
    console.log(err);
})

const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.send("Testing");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})