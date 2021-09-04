const app = require("./src/app");
let DOOR = process.env.DOOR || 8080;

app.listen(DOOR, () => {
    console.log(`Servidor rodando com sucesso na porta ${DOOR}`);
})