const express = require('express');
const router = express.Router();
const {
  addProduct,
  getAllProducts
} = require("../controllers/productController");
  router.post("/api/addProduct", addProduct);
  router.get("/api/getAllProducts", getAllProducts);

  module.exports = router;