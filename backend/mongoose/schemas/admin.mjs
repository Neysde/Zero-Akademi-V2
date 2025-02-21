import mongoose, { mongo } from "mongoose";

const adminSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.Number,
    required: true,
    unique: true,
  },
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", adminSchema);
