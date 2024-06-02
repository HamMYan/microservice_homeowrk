const Sequelize = require("sequelize");

const sequelize = new Sequelize("node1", "user", "Pass@1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const User = require("./User")(sequelize, Sequelize);


sequelize.sync();
module.exports = { User };
