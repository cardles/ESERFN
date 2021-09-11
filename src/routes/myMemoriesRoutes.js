const express = require("express");
const controller = require("../controller/myMemoriesController");
const authMiddleware = require("../controller/authorization");

const router = express.Router();
router.use(authMiddleware);

router.get("/", controller.getMyMemories);
router.post("/criar", controller.postNewMemory);
router.delete("/apagar/:id", controller.deleteMemoryById);
router.put("/editar/:id", controller.putMemoryById);


module.exports = router;