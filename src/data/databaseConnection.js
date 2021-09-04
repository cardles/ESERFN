const mongoose = require("mongoose");
// require("dotenv-safe").config();


// const MONGODB = process.env.MONGODB_URL;
const MONGODB = "mongodb://localhost:27017/eserfn"

const connect = () => {
    mongoose.connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Database conectada com sucesso!"))
    .catch(err => console.err)
};


module.exports = { connect };