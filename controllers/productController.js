const Product = require("../models/products");
const addproduct = (req, res) => {
  const receivedDataTitle = req.body.title;
  const receivedDataPrice = req.body.price;
  const receivedDataDesc = req.body.description;
  const product = new Product({
    title: receivedDataTitle,
    price: receivedDataPrice,
    description: receivedDataDesc,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "product added sucessfully",
        data: {},
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.errmsg,
      });
    });
};

const fetchProduct = (req, res) => {
  Product.find()
    .then((results) => {
      res.status(200).json({
        message: "product fetched sucessfully",
        data: results,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.errmsg,
      });
    });
};

const deleteProduct = (req, res) => {
  const prodId = req.params.id;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      res.status(200).json({
        message: "product deleted sucessfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.errmsg,
      });
    });
};

const updateProduct = (req, res) => {
  const prodId = req.params.id;
  Product.findById(prodId)
    .then((product) => {
      product.title = req.body.title;
      product.price = req.body.price;
      product.description = req.body.description;
      return product.save();
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "product updated sucessfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err.errmsg,
      });
    });
};

module.exports = {
  addproduct: addproduct,
  fetchProduct: fetchProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
};
