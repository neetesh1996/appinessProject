const express = require("express");
const router = express.Router();
const {
  addCategory,
  getAllCategories,
  deleteCategory
} = require("../controllers/categoryController");

router.post("/api/addcategory", addCategory);
router.get("/api/getAllCategories", getAllCategories);
router.delete("/api/deleteCategory", deleteCategory);

module.exports = router;