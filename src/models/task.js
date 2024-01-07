import mongoose, { Schema } from "mongoose";

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
    type: Schema.Types.ObjectId,
    // type : String,
    ref: "Users", 
    required: true,
  },
});

export const Tasks =
  mongoose.models.Tasks || mongoose.model("Tasks", taskSchema);
