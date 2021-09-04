const express = require("express");
const controller = require("../controller/ourMemoriesController");

const router = express.Router();

router.get("/", controller.getAllMemories);
router.get("/cidade", controller.getMemoriesByCity);
router.get("/:id", controller.getMemoriesById);


module.exports = router;