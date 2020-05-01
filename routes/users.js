const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/api/fetchproduct/:id?", productController.fetchProduct);
router.get("/api/deleteProduct/:id", productController.deleteProduct);
router.post("/api/updateProduct/:id", productController.updateProduct);

module.exports = router;
