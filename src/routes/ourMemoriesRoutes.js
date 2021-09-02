const express = require("express");
const controller = require("../controller/ourMemoriescontroller");

const router = express.Router();

router.get("/", controller.getAllMemories);
router.get("/cidade", controller.getMemoriesByCity);
router.get("/:id", controller.getMemoriesById);


module.exports = router;