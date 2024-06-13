import mongoose, { Schema } from "mongoose";
const studentSchema = new Schema({
  name: { type: String },
  roll: { type: Number, unique: true },
});
const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
export default Student;
