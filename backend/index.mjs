import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import dotenv from "dotenv";
import route from "./routes/route.mjs";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file. This MUST be at the top, after essential imports for path resolution.
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

app.use(express.json());

// Set up view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { path: "/" }, // Ensure cookie is valid for all paths
  })
);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI) // just change localhost to 0.0.0.0 to prevent error. (MongoDB seems to be not compatible with NodeJS v17)
  .then(() => console.log("Connected to the database."))
  .catch((err) => console.log(`Error: ${err}`));

app.use(route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
