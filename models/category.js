const { DataTypes } =require("sequelize");
module.exports= (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    categoryId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    categoryName: {
        type: Sequelize.STRING,
      },
    categoryDescription: {
        type: Sequelize.STRING,
      },  
  });
  return Category;
};