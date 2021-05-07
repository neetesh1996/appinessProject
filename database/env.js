// database connection 
// in this project db using from AWS rds instance 
const env = {
  database: "database-1",
  username: "admin",
  password: "Eynos$123",
  host: "database-1.crfy19p93raq.ap-south-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;