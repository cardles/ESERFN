const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    nome:  { type: String, required: true },
    email:  { type: String, required: true },
    senha:  { type: String, required: true },
    orientacaoSexual:  { type: String, required: true },
    genero:  { type: String, required: true },
    raca:  { type: String, required: true }
}, 
{ versionKey: false }
);


module.exports = mongoose.model("user", userSchema);