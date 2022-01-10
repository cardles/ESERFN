const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../view/swagger.json");

const router = express.Router();

router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;
