import express from "express";
import upload from "../middleware/upload.js";

import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,

} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get single product
router.get("/:id", getProductById);

// Add product (supports image URL or uploaded file)
router.post(
  "/",
  upload.single("imageFile"),
  addProduct
);

router.delete("/:id", deleteProduct);

router.put(
  "/:id",
  upload.single("imageFile"),
  updateProduct
);
export default router;