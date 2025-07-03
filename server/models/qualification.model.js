import mongoose from "mongoose";

const QualificationSchema = new mongoose.Schema({
  title: String,
  institution: String,
  startDate: Date,
  endDate: Date
});

export default mongoose.model("Qualification", QualificationSchema);
