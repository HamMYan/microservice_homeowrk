const { Product } = require("../model");

class MainController {
  constructor() {
    throw new Error("MainController is abstract class");
  }
  static async getProduct(req, res) {
    const products = await Product.findAll();
    res.send(products);
  }
  static async getProductById(req, res) {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(product);
  }
  static async getProductByUserId(req,res){
    const product = await Product.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.send(product);
  }
  static async getUsersProduct(req, res) {
    const product = await Product.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.send(product);
  }
  static async update(req, res) {
    const product = await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(product);
  }
  static async addProduct(req, res) {
    const newProduct = await Product.create({
      ...req.body,
    });
    res.send(newProduct);
  }
  static async delete(req, res) {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(true);
  }
}

module.exports = MainController;
