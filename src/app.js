const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = require("./data/databaseConnection"); 
db.connect();


const indexRoutes = require("./routes/indexRoutes");
const myMemoriesRoutes = require("./routes/myMemoriesRoutes");
const ourMemoriesRoutes = require("./routes/ourMemoriesRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", indexRoutes);
app.use("/minhas-memorias", myMemoriesRoutes);
app.use("/nossas-memorias", ourMemoriesRoutes);
app.use("/usuaria", userRoutes);

module.exports = app;