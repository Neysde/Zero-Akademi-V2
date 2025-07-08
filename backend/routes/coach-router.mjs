import express from "express";
import { Coach } from "../mongoose/schemas/coaches.mjs";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
// Import the refactored handlers from your image upload module
import { upload, deleteImage } from "./image-upload.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// --- Static Asset Routes ---
router.use("/css", express.static(path.join(__dirname, "../../views/css")));
router.use("/js", express.static(path.join(__dirname, "../../views/js")));
router.use("/images", express.static(path.join(__dirname, "../../images")));

// --- API Routes ---

/**
 * @route POST /api/coaches/single
 * @description Add a new single coach with optional image uploads.
 * This route now uses a chain of middleware for a cleaner workflow:
 * 1. `upload.fields`: Parses multipart/form-data for image fields.
 * 2. `handleImageUploads`: Uploads files to Cloudinary and attaches results to `req.cloudinaryData`.
 * 3. Final handler: Creates the coach in the DB using data from `req.body` and `req.cloudinaryData`.
 */
router.post(
  "/api/coaches",
  // Middleware for file uploads is removed because images are pre-uploaded
  // and their URLs are sent in the JSON body.
  async (req, res) => {
    try {
      // --- Create and Save Coach to Database ---
      const lastCoach = await Coach.findOne().sort({ order: -1 });
      const nextOrder = lastCoach ? lastCoach.order + 1 : 0;
      const coachCount = await Coach.countDocuments();

      // Destructure all data, including image URLs, from the request body
      const { name, university, program, field, score, about, coachPicture, examResultImage } = req.body;

      const newCoach = new Coach({
        name,
        university,
        program,
        field: field ? field.split(',') : [],
        score,
        about,
        coachPicture, // Image data from the JSON body
        examResultImage, // Image data from the JSON body
        id: coachCount + 1,
        order: nextOrder,
      });

      const savedCoach = await newCoach.save();
      res.status(201).send(savedCoach);
    } catch (err) {
      console.error("Coach creation error:", err);
      res.status(400).json({
        message: err.message,
        errors: err.errors,
      });
    }
  }
);


// Add multiple coaches (bulk) - This route assumes no image uploads
router.post("/api/coaches/multiple", async (req, res) => {
  try {
    const newCoaches = await Coach.insertMany(req.body);
    res.status(201).json(newCoaches);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all coaches, sorted by order
router.get("/api/coaches", async (req, res) => {
  try {
    const coaches = await Coach.find({}).sort({ order: "asc" });
    res.json(coaches);
  } catch (error) {
    console.error("Error fetching coaches:", error);
    res.status(500).json({ message: "Error fetching coaches" });
  }
});

// Route to get coach details, ensuring 'about' is plain text
router.get("/api/coaches/:id/details", async (req, res) => {
  try {
    const { id } = req.params;
    const coach = await Coach.findById(id).lean(); // Use .lean() for a plain object

    if (!coach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    // The 'about' field is already plain text, so just send the coach data
    res.json(coach);
  } catch (error) {
    console.error("Error fetching coach details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get a single coach by ID
router.get("/api/coaches/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coach = await Coach.findById(id);
    res.status(200).json(coach);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a coach and their images from Cloudinary
router.delete("/api/coaches/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const coach = await Coach.findById(id);
    if (!coach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    const deletionPromises = [];

    // Use the imported deleteImage function for a cleaner deletion process
    if (coach.coachPicture && coach.coachPicture.publicId) {
      deletionPromises.push(deleteImage(coach.coachPicture.publicId));
    }

    if (coach.examResultImage && coach.examResultImage.publicId) {
      deletionPromises.push(deleteImage(coach.examResultImage.publicId));
    }

    if (deletionPromises.length > 0) {
      await Promise.all(deletionPromises);
    }

    await Coach.findByIdAndDelete(id);

    res.status(200).json({ message: "Coach and associated images deleted successfully" });
  } catch (error) {
    console.error("Error deleting coach:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update a coach's details
router.put("/api/coaches/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Convert field string to array if it exists
    if (updateData.field && typeof updateData.field === 'string') {
      updateData.field = updateData.field.split(',');
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Find the existing coach to compare image data
    const existingCoach = await Coach.findById(id);
    if (!existingCoach) {
      return res.status(404).json({ message: "Coach not found" });
    }

    const deletionPromises = [];

    // --- Coach Picture Deletion Logic ---
    const oldCoachPictureId = existingCoach.coachPicture?.publicId;
    const newCoachPictureId = updateData.coachPicture?.publicId;

    // Delete the old image only if a valid old publicId exists and it's different from the new one.
    if (oldCoachPictureId && oldCoachPictureId !== newCoachPictureId) {
      deletionPromises.push(deleteImage(oldCoachPictureId));
    }

    // --- Exam Result Image Deletion Logic ---
    const oldExamResultImageId = existingCoach.examResultImage?.publicId;
    const newExamResultImageId = updateData.examResultImage?.publicId;

    // Delete the old image only if a valid old publicId exists and it's different from the new one.
    if (oldExamResultImageId && oldExamResultImageId !== newExamResultImageId) {
      deletionPromises.push(deleteImage(oldExamResultImageId));
    }

    // Wait for all deletions to complete
    if (deletionPromises.length > 0) {
      await Promise.all(deletionPromises);
    }

    // Proceed with updating the coach in the database
    const updatedCoach = await Coach.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "Coach updated successfully", coach: updatedCoach });
  } catch (error) {
    console.error("Error editing coach:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Reorder coaches
router.post("/api/coaches/reorder", async (req, res) => {
  try {
    const { orderedIds } = req.body;

    if (!orderedIds || !Array.isArray(orderedIds)) {
      return res.status(400).json({ message: "Invalid payload: orderedIds array is required." });
    }

    const updatePromises = orderedIds.map((coachId, index) => {
      return Coach.updateOne({ _id: coachId }, { $set: { order: index } });
    });

    await Promise.all(updatePromises);

    res.status(200).json({ message: "Coaches reordered successfully." });
  } catch (error) {
    console.error("Error reordering coaches:", error);
    res.status(500).json({ message: "Internal server error while reordering coaches." });
  }
});

export default router;
