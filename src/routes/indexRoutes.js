const express = require("express");
const controller = require("../controller/indexcontroller");

const router = express.Router();

router.get("/inicio", controller.getStart);
router.get("/sobre", controller.getAbout);
router.get("/contato", controller.getContact);


module.exports = router;