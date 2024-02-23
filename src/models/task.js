import mongoose, { Schema } from "mongoose";
import { Users } from "./user";
const taskSchema = new Schema({
  title: {
    type: String,
    minlength: 2,
    lowercase: true,
    required: true,
  },
  desc: {
    type: String,
    minlength: 2,
    lowercase: true,
    required: false,
  },
  addedDate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    ref: "Users", 
    required: true,
  },
});

export const Tasks =
  mongoose.models.Tasks || mongoose.model("Tasks", taskSchema);
