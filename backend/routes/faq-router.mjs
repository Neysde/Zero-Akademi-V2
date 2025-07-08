import express from "express";
import { Faq } from "../mongoose/schemas/faq.mjs";

const router = express.Router();

// Get all FAQs, sorted by order
router.get("/api/faqs", async (req, res) => {
  try {
    const faqs = await Faq.find({}).sort({ order: "asc" });
    res.json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Error fetching FAQs" });
  }
});

// Get a single FAQ by ID
router.get("/api/faqs/:id", async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.json(faq);
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    res.status(500).json({ message: "Error fetching FAQ" });
  }
});

// Create a new FAQ
router.post("/api/faqs", async (req, res) => {
  try {
    const lastFaq = await Faq.findOne().sort({ order: -1 });
    const nextOrder = lastFaq ? lastFaq.order + 1 : 0;

    const newFaq = new Faq({
      ...req.body,
      order: nextOrder,
    });

    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing FAQ
router.put("/api/faqs/:id", async (req, res) => {
  try {
    const updatedFaq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedFaq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.json(updatedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an FAQ
router.delete("/api/faqs/:id", async (req, res) => {
  try {
    const deletedFaq = await Faq.findByIdAndDelete(req.params.id);

    if (!deletedFaq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.status(200).json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ message: "Error deleting FAQ" });
  }
});

// Update the order of FAQs
router.post("/api/faqs/reorder", async (req, res) => {
  const { orderedIds } = req.body;

  if (!orderedIds || !Array.isArray(orderedIds)) {
    return res.status(400).send("Invalid order data provided.");
  }

  try {
    const updatePromises = orderedIds.map((id, index) =>
      Faq.findByIdAndUpdate(id, { order: index })
    );

    await Promise.all(updatePromises);
    res.status(200).send("FAQs reordered successfully.");
  } catch (error) {
    console.error("Error reordering FAQs:", error);
    res.status(500).send("Failed to reorder FAQs.");
  }
});

export default router;
