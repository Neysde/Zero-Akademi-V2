import express from "express";
import mongoose from "mongoose";
import coachRouter from "./routes/coach-router.mjs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import pageRouter from "./routes/page-router.mjs";
import adminRouter from "./routes/admin-router.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5500", // Replace with your frontend's origin
  })
);

// Set up view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// Serve static files from public directory
//app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://0.0.0.0/coaches") // just change localhost to 0.0.0.0 to prevent error. (MongoDB seems to be not compatible with NodeJS v17)
  .then(() => console.log("Connected to the database."))
  .catch((err) => console.log(`Error: ${err}`));

app.use(coachRouter);
app.use("/", pageRouter);
app.use(adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
