import mongoose from "mongoose";

const BloodworkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cholesterol: Number,
  bloodSugar: Number,
  hemoglobin: Number,
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Bloodwork", BloodworkSchema);
