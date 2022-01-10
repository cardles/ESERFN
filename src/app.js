const indexRoutes = require("./routes/indexRoutes");
const myMemoriesRoutes = require("./routes/myMemoriesRoutes");
const ourMemoriesRoutes = require("./routes/ourMemoriesRoutes");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const db = require("./data/databaseConnection"); 
const docRoutes = require("./routes/docRoutes");


const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

db.connect();


app.use("/api-docs", swaggerUi.serve, docRoutes);
app.use("/", indexRoutes);
app.use("/minhas-memorias", myMemoriesRoutes);
app.use("/nossas-memorias", ourMemoriesRoutes);
app.use("/usuaria", userRoutes);

module.exports = app;