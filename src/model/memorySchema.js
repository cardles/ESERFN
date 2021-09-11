const mongoose = require("mongoose");
const userSchema = require("./userSchema");

const memorySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    usuaria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    titulo: { type: String }, //opcional
    endereco: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    categoriaDaMemoria: { type: String, required: true },
    sentidoAtivado: { type: String, required: true },
    dataDaMemoria: { type: String, required: true }, //rever, se necessário
    descricao: { type: String } //opcional
}, 
{ versionKey: false }
);


module.exports = mongoose.model("memory", memorySchema);