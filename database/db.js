const env = require("./env.js");
const Sequelize = require("sequelize");
console.log(env.database);
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  logging: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models

db.product = require("../models/Product")(sequelize, Sequelize);


db.category = require("../models/Category")(sequelize, Sequelize);

// relationships between category & product table

db.category.hasMany(db.product, { as: "product" });
db.product.belongsTo(db.category, { foreignKey: "categoryId", as: "category" });


module.exports = db;