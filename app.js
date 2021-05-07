const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const Port = process.env.PORT || 3000;
const app = express();
const db = require("./database/db");


const product = require("./routes/productRoute");
const category = require("./routes/categoryRoute");

// dataBase conection
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("Unable to connect db Error:", +err);
  });
app.use(compression());
app.use(helmet());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({ limit: "10mb", extended: true, parameterLimit: 1000 })
);

app.use(product);
app.use(category);

//start app
app.listen(Port, () =>
  console.log(`Server started successfully on ${Port} port`)
);