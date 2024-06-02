const MainController = require("../controller/MainController");

const router = require("express").Router();

router.get("/", MainController.getUsers);
router.get("/:id", MainController.getuserById);
router.post("/", MainController.addUser);
router.patch("/:id", MainController.update);
router.delete("/:id", MainController.delete);

module.exports = router;
