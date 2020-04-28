const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
/* GET users listing. */
router.post("/api/addproduct", productController.addproduct);
router.get("/api/fetchproduct", productController.fetchProduct);

module.exports = router;
