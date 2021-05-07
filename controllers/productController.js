
const db = require("../database/db");
const Product = db.product;
const Category = db.category;

// add product 
exports.addProduct = async (req, res) => {
  try {
    const data = req.body;
    if (!data.categoryId) { res.status(401).json({ status: false, msg: "please provide CategoryId" })};
    const categorydata = await Category.findOne({
        where: { categoryId: data.categoryId },
      });
      // Check if record exists in db
    if (!categorydata) {res.status(401).json({status: false, msg: "Category Details doesnot exists"})};
    const userData = {
      productName: data.productName,
      productDescription: data.productDescription,
      productPrice: data.productPrice,
      categoryId: data.categoryId,
    };
    await Product.create(userData);
    res
      .status(200)
      .json({ status: true, msg: "Product Details added successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: `${error}` });
  }
};

// get all products
exports.getAllProducts = async (req, res) => {
    try {
      var data = {};
      const result = await Product.findAll({
        attributes: [
          "productId",
          "productName",
          "productDescription",
          "productPrice",
          "categoryId"
        ],
      });
      data.result = result;
      data.TotalRecords = result.length;
      res.send(data);
    } catch (error) {
      res.status(400).json({ success: false, message: `${error}` });
    }
  };