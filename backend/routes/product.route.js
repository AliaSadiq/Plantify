// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { createProduct,getProducts,getProductById,updateProduct ,deleteProductById,deleteAllProducts} = require("../controllers/product.controller");

// Route to create a product
router.post("/", createProduct);
router.get("/", getProducts);
router.get('/:id',getProductById);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProductById);
router.delete("/",deleteAllProducts);

module.exports = router;
