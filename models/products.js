// const getDBConnect = require("../utils/database").getDB;

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true, index: { unique: true } },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

// class Product {
//   constructor(title, price, description) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//   }

//   save() {
//     const db = getDBConnect();
//     return db.collection("products").insertOne(this);
//   }
// }

module.exports = Product;
