import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import aiRoutes from "./routes/ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/ai", aiRoutes);

mongoose.connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));


app.listen(5000, () => console.log("Server running on port 5000"));
