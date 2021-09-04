const app = require("./src/app");
let PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
})