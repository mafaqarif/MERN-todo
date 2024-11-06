import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import todoRouter from "./routes/todo";

dotenv.config();

const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from TypeScript backend!");
});

app.use("/api/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
