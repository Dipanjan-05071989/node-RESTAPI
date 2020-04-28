const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
/* GET users listing. */
router.post("/api/addproduct", productController.addproduct);
router.get("/api/fetchproduct", productController.fetchProduct);
router.get("/api/deleteProduct/:id", productController.deleteProduct);
router.post("/api/updateProduct/:id", productController.updateProduct);

module.exports = router;
