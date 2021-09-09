const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB = process.env.MONGODB_URI
// process.env.MONGODB_URL ||
// senha antiga: @Arch2dev*

const connect = () => {
    mongoose.connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database conectada com sucesso!"))
    .catch(err => console.log(err))
};


module.exports = { connect };