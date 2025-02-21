import express from "express";
import { Coach } from "../mongoose/schemas/coaches.mjs";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

router.use("/css", express.static(path.join(__dirname, "../../views/css")));
router.use("/js", express.static(path.join(__dirname, "../../views/js")));
router.use("/images", express.static(path.join(__dirname, "../../images")));

// Add new coach (single)
router.post("/api/coaches/single", async (req, res) => {
  try {
    const coachCount = await Coach.countDocuments();
    const newCoach = new Coach({
      ...req.body,
      id: coachCount + 1, // Auto-increment ID
    });

    const savedCoach = await newCoach.save(); // Fixed variable name
    res.status(201).send(savedCoach);
  } catch (err) {
    console.error("Coach creation error:", err); // Detailed logging
    res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  }
});

// Add multiple coaches (bulk)
router.post("/api/coaches/multiple", async (req, res) => {
  try {
    const newCoaches = await Coach.insertMany(req.body);
    res.status(201).json(newCoaches);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/api/coaches", async (req, res) => {
  try {
    const db = mongoose.connection.db; // Access the native MongoDB driver
    const coaches = await db.collection("coaches").find({}).toArray();
    res.json(coaches);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
});

router.get("/api/coaches/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coach = await Coach.findById(id);
    res.status(200).json(coach);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/api/coaches/:id", async (req, res) => {
  try {
    const { id } = req.params; // Destructure ID directly from params

    // Remove unnecessary ID parsing - MongoDB uses string IDs
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await Coach.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Coach not found" });
    }

    // Send single response - remove duplicate res.json()
    res.status(200).json({ message: "Coach deleted successfully" });
  } catch (error) {
    console.error("Error deleting coach:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/api/coaches/:id", async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await Coach.findByIdAndUpdate(id, body, { new: true });
    if (!result) {
      return res.status(404).json({ message: "Coach not found" });
    }

    res.status(200).json({ message: "Coach updated successfully" });
  } catch (error) {
    console.error("Error editing coach:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
