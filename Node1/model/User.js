module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    age: Sequelize.INTEGER,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  });
  return User
};
