const express = require("express");
const controller = require("../controller/userController");

const router = express.Router();

router.post("/criar", controller.postNewUser);
router.post("/entrar", controller.postLogin);


module.exports = router;