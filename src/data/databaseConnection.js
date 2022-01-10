const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB = process.env.MONGODB_URL;

const connect = () => {
    mongoose.connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database conectada com sucesso!"))
    .catch(err => console.log(err))
};


module.exports = { connect };