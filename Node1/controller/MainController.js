const { User } = require("../model");

class MainController {
  constructor() {
    throw new Error("MainController is abstract class");
  }
  static async getUsers(req, res) {
    const users = await User.findAll();
    res.send(users);
  }
  static async getuserById(req, res) {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(user);
  }
  static async update(req, res) {
    const user = await User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(user);
  }
  static async addUser(req, res) {
    const newUser = await User.create({
      ...req.body,
    });
    res.send(newUser);
  }
  static async delete(req, res) {
     await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(true);
  }
}

module.exports = MainController;
