import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  customer: String,
  is_success:Boolean,
  user_id:String,
  email:String,
  roll_number:String,
  numbers:[String],
  alphabets:[String],
  highest_alphabet:[String]
});

// Model
export const StudentModel = mongoose.model("Student", StudentSchema);
