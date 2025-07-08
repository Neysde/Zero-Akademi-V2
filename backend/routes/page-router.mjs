import express from "express";
import { Faq } from "../mongoose/schemas/faq.mjs";
import { Coach } from "../mongoose/schemas/coaches.mjs";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import expressLayouts from "express-ejs-layouts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.use(expressLayouts);
router.use("/css", express.static(path.join(__dirname, "../../views/css")));
router.use("/js", express.static(path.join(__dirname, "../../views/js")));
router.use("/images", express.static(path.join(__dirname, "../../images")));

router.get("/contact", (req, res) => {
  res.render("contact.ejs", { title: "İletişim" });
});

// Basic route for the home page
router.get("/", async (req, res) => {
  try {
    // Fetch 6 random coaches from the database
    const coaches = await Coach.aggregate([{ $sample: { size: 6 } }]);
    res.render("index.ejs", { title: "Zero Akademi", coaches: coaches });
  } catch (error) {
    console.error("Error fetching coaches for main page:", error);
    // Render the page without coaches or with an error message
    res.render("index.ejs", { title: "Zero Akademi", coaches: [] }); 
  }
});

router.get("/coaches", (req, res) => {
  res.render("coaches.ejs", { title: "Koçlarımız" });
});

router.get("/about", (req, res) => {
  res.render("about.ejs", { title: "Hakkımızda" });
});

router.get("/faq", async (req, res) => {
  try {
    const faqs = await Faq.find({}).sort({ order: "asc" });
    res.render("faq.ejs", { title: "Sıkça Sorulan Sorular", faqs });
  } catch (error) {
    console.error("Error fetching FAQs for page:", error);
    res.status(500).render("error", { message: "SSS sayfası yüklenirken bir hata oluştu." });
  }
});

router.get("/register", (req, res) => {
  res.render("register.ejs", { title: "Kayıt Ol" });
});

export default router;
