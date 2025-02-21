import express from "express";
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
router.get("/", (req, res) => {
  res.render("index.ejs", { title: "Zero Akademi" });
});

router.get("/coaches", (req, res) => {
  res.render("coaches.ejs", { title: "Koçlarımız" });
});

router.get("/about", (req, res) => {
  res.render("about.ejs", { title: "Hakkımızda" });
});

router.get("/faq", (req, res) => {
  res.render("faq.ejs", { title: "Sıkça Sorulan Sorular" });
});

router.get("/register", (req, res) => {
  res.render("register.ejs", { title: "Kayıt Ol" });
});

export default router;
