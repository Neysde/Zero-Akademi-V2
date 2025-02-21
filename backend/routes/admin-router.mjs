import express from "express";

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

router.post(
  "/api/admin/register",
  checkSchema(createUserValidationSchema),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      //Use array.map() to extract objects' msg property in an array and create a new array with that property.
      const errorMessages = result.array().map((error) => error.msg);
      return res.status(400).send(errorMessages);
    }

    const data = matchedData(req);

    // Get the count of existing admins to generate the next ID
    const adminCount = await Admin.countDocuments();
    const encryptedPassword = hashPassword(data.password);
    const newAdmin = new Admin({
      ...data,
      id: adminCount + 1, // Auto-increment ID based on existing admin count
      password: encryptedPassword,
    });

    try {
      const savedAdmin = await newAdmin.save();
      return res.status(201).send(savedAdmin);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
);

router.get("/api/admin/login", (req, res) => {
  res.render("adminlogin.ejs", {
    title: "Admin Login",
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

      // Password is valid, send success response
      // You might want to create a session or JWT token here
      return res.status(200).send({
        message: `Login successful ${admin.username}`,
      });
    } catch (err) {
      return res.status(500).send("Server error");
    }
  }
);

router.get("/api/admin/dashboard", (req, res) => {
  res.render("dashboard.ejs", {
    title: "Admin Dashboard",
    layout: "adminlayout.ejs",
  });
});
export default router;
