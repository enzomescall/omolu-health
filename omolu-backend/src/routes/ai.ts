import express from "express";
import { analyzeBloodwork } from "../utils/ai";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const response = await analyzeBloodwork(req.body);
    res.json({ suggestion: response });
  } catch (error) {
    res.status(500).json({ error: "AI analysis failed" });
  }
});

export default router;
