import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.Number,
    required: true,
    unique: true,
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  university: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  program: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  score: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  field: [
    {
    type: mongoose.Schema.Types.String,
    required: true,
    }
  ],
  about: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  coachPicture: {
    url: {
      type: String,
    },
    publicId: {
      type: String,
    },
  },
  examResultImage: {
    url: {
      type: String,
    },
    publicId: {
      type: String,
    },
  },
  order: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const Coach = mongoose.model("Coach", coachSchema);
