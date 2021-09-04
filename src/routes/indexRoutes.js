const express = require("express");
const controller = require("../controller/indexcontroller");

const router = express.Router();

router.get("/inicio", controller.getStart);
router.get("/sobre", controller.getAbout);
router.get("/contato", controller.getContact);

// paga testar heroku
router.get("/oi", (req, res) => {
    res.status(200).send("Agora FOI glória a deus aleluia!")
})


module.exports = router;