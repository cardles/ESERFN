const express = require("express");
const controller = require("../controller/myMemoriescontroller");

const router = express.Router();

router.post("/criar", controller.postNewMemory);
router.delete("/apagar/:id", controller.deleteMemoryById);
router.put("/editar/:id", controller.putMemoryById);


module.exports = router;