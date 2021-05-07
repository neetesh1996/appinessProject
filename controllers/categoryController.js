const db = require("../database/db");
const Category = db.category;
const Product = db.product;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// add category 
exports.addCategory = async (req, res) => {
    try {
      let data = req.body;
      if (!data.categoryName) {
        res
          .status(401)
          .json({ status: false, msg: "please provide CategoryName" });
      } else {
        var result = await Category.findOne({
          where: { categoryName: data.categoryName },
        });
        if (result) {
          res.status(401).json({
            status: false,
            msg: "Category Already exist",
          });
        } else {
          const userData = {
            categoryName: data.categoryName,
            categoryDescription: data.categoryDescription
          };
          await Category.create(userData);
          res
            .status(200)
            .json({ status: true, msg: "Category Details added successfully" });
        }
      }
    } catch (error) {
      res.status(400).json({ success: false, message: `${error}` });
    }
  };
  // get list of all categories
  exports.getAllCategories = async (req, res) => {
    try {
      const data = {};
      var result = await Category.findAll({
        attributes: [
          "categoryId",
          "categoryName",
          "categoryDescription",
        ],
    
        order: [["updatedAt", "DESC"]],
      });
      data.result = result;
      data.TotalRecords = result.length;
      if (result.length === 0) {
        res.status(401).json({ status: false, msg: "No Record found" });
      } else {
        res.send(data);
      }
    } catch (error) {
      res
        .status(401)
        .json({ status: false, msg: "cayegory  doesnot exists", error });
    }
  };

// for delete category with associated products
  exports.deleteCategory = async (req, res) => {
    try {
      let { categoryId } = req.query;
      if (!categoryId) {
        res
          .status(401)
          .json({ status: false, msg: "please provide CategoryId" });
      } else {
        var data = await Category.findOne({
          where: { categoryId: categoryId },
        });
        // Check if record exists in db
        if (!data) {
          res.status(401).json({
            status: false,
            msg: "Category Details doesnot exists",
          });
        } else {
          Category.destroy({
            where: { categoryId: categoryId },
          });
          res.status(200).json({
            status: true,
            msg: `Category Deleted with categoryId ${categoryId} & associated products successfully`,
          });
        }
      }
    } catch (error) {
      res.status(400).json({ success: false, message: `${error}` });
    }
  };