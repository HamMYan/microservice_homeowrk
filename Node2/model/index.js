const Sequelize = require("sequelize");

const sequelize = new Sequelize("node2", "user", "Pass@1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const Product = require("./Product")(sequelize, Sequelize);

sequelize.sync();
module.exports = { Product };
