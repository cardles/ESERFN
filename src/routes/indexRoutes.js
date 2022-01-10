const express = require("express");
const controller = require("../controller/indexController");

const router = express.Router();

router.get("/", controller.getStart);
router.get("/sobre", controller.getAbout);
router.get("/contato", controller.getContact);


module.exports = router;