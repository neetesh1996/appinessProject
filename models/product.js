const { DataTypes } =require("sequelize");
module.exports= (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    productId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
      type: Sequelize.STRING,
    },
    productDescription: {
      type: Sequelize.STRING,
    },
    productPrice: {
      type: Sequelize.STRING,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "categoryId",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });
  return Product;
};