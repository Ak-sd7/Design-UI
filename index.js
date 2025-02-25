import express from "express";
import cors from "cors";
import { config } from "dotenv";

export const app = express();

config({
    path:"./data/config.env"
});

app.use(express.json());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.get("/", (req, res)=>{
    res.send("hello");
    console.log("hello");
})