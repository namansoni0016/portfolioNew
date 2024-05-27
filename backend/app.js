import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.send("Testing");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})