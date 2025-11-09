import express from "express";
import Products_Controller from "../controllers/productsController.js";
const router = express.Router();

router.get("/all", Products_Controller.showAllProducts);

// --- THAY ĐỔI QUAN TRỌNG ---
// Route /category/:categoryId PHẢI nằm TRƯỚC route /:slug
// Nếu không, Express sẽ nghĩ "category" là một "slug"
router.get("/category/:categoryId", Products_Controller.showByCategory);

router.get("/:slug", Products_Controller.show);
router.post("/", Products_Controller.create);

export default router;