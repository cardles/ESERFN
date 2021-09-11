const express = require("express");
const controller = require("../controller/indexController");

const router = express.Router();

router.get("/", controller.getStart);
router.get("/sobre", controller.getAbout);
router.get("/contato", controller.getContact);

// para testar heroku
router.get("/oi", (req, res) => {
    res.status(200).send("Agora FOI glória a deus aleluia!")
})


module.exports = router;