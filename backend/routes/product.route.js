import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';


const router = express.Router();

router.get("/", getProducts); // Get all products.
router.post("/", createProduct); // Create a product.
router.delete("/:id", deleteProduct); // Delete a product.
router.put("/:id", updateProduct); // Update a product.

export default router; // Export the router.