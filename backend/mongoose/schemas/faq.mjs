import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    answer: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
        default: 0,
    }
})

export const Faq = mongoose.model("Faq", faqSchema, "faqs")