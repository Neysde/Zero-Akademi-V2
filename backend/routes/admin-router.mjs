import express from "express";
import { upload, uploadToCloudinary, deleteImage } from "./image-upload.mjs";

import { Admin } from "../mongoose/schemas/admin.mjs";
import mongoose from "mongoose";
import {
  query,
  validationResult,
  body,
  matchedData,
  checkSchema,
} from "express-validator";
import { createUserValidationSchema } from "../mongoose/schemas/validationSchemas.mjs";
import ejs from "ejs";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import { Coach } from "../mongoose/schemas/coaches.mjs";
import { comparePassword, hashPassword } from "../encryptpass.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

const requireAuth = (req, res, next) => {
  if (!req.session.adminId) return res.redirect("/admin/login");
  next();
};

router.get("/admin/login", (req, res) => {
  res.render("adminlogin.ejs", {
    title: "Admin Login",
    BASE_URL: process.env.BASE_URL,
    layout: "adminlayout.ejs",
  });
});

router.post(
  "/api/admin/login",
  checkSchema(createUserValidationSchema),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      //Use array.map() to extract objects' msg property in an array and create a new array with that property.
      const errorMessages = result.array().map((error) => error.msg);
      return res.status(400).send(errorMessages);
    }

    const data = matchedData(req);

    try {
      // Find admin by username
      const admin = await Admin.findOne({ username: data.username });

      // Check if admin exists
      if (!admin) {
        return res.status(401).send("Invalid username or password");
      }

      // Compare passwords
      const isPasswordValid = comparePassword(data.password, admin.password);

      if (!isPasswordValid) {
        return res.status(401).send("Invalid username or password");
      }

      // Password is valid. Set session and save it before responding.
      req.session.adminId = admin.id;
      req.session.save((err) => {
        if (err) {
          console.error("Session save error:", err);
          return res.status(500).send("Server error during login.");
        }
        res.status(200).send({
          message: `Login successful ${admin.username}`,
        });
      });
    } catch (err) {
      return res.status(500).send("Server error");
    }
  }
);

router.get("/admin/dashboard", requireAuth, (req, res) => {
  res.render("dashboard.ejs", {
    title: "Admin Dashboard",
    layout: "adminlayout.ejs",
  });
});

router.get("/api/admin/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/api/admin/login"));
});
router.post(
  "/api/upload-image",
  requireAuth,
  upload.fields([
    { name: "coachPicture", maxCount: 1 },
    { name: "examResultImage", maxCount: 1 },
  ]),
  uploadToCloudinary,
  (req, res) => {
    if (req.cloudinaryData && Object.keys(req.cloudinaryData).length > 0) {
      res.status(200).json({
        success: true,
        message: "Images uploaded successfully.",
        data: req.cloudinaryData,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No images were uploaded.",
      });
    }
  }
);

export default router;
