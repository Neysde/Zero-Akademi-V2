import express from "express";
import adminRouter from "./admin-router.mjs";
import coachRouter from "./coach-router.mjs";
import pageRouter from "./page-router.mjs";
import faqRouter from "./faq-router.mjs";
import { upload, uploadToCloudinary, deleteImage } from "./image-upload.mjs";

const router = express.Router();

//Add body parsing middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// --- Image Upload Route ---
// This route handles single image uploads and returns the new image's data.
// It also deletes the old image if its public ID is provided.
router.post("/api/upload-image", upload.any(), async (req, res) => {
  const { oldPublicId } = req.body; // The public ID of the image to be replaced
  const file = req.files && req.files[0]; // The new image file

  if (!file) {
    return res.status(400).json({ success: false, message: "No image file provided." });
  }

  try {
    // If an old public ID is provided, delete the old image from Cloudinary
    if (oldPublicId) {
      await deleteImage(oldPublicId);
    }

    // Upload the new image to Cloudinary
    const result = await uploadToCloudinary(file.buffer);

    // Send back the new image's URL and public ID
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: { url: result.secure_url, publicId: result.public_id },
    });
  } catch (error) {
    console.error("Image upload error:", error);
    res.status(500).json({ success: false, message: "Image upload failed.", error: error.message });
  }
});

router.use(adminRouter);
router.use(coachRouter);
router.use(pageRouter);
router.use(faqRouter);

export default router;
