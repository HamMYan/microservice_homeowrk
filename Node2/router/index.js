const MainController = require("../controller/MainController");

const router = require("express").Router();

router.get("/", MainController.getProduct);
router.get("/:id", MainController.getProductById);
router.get("/getUsersProduct/:id", MainController.getUsersProduct);
router.get("/getProductByUserId/:id", MainController.getProductByUserId);


router.post("/", MainController.addProduct);

router.patch("/:id", MainController.update);

router.delete("/:id", MainController.delete);

module.exports = router;
