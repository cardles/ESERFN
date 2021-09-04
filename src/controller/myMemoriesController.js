const Memory = require("../model/memorySchema");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const postNewMemory = async (req, res) => {

    const inputNewMemory = new Memory({
        _id: new mongoose.Types.ObjectId(),
        titulo: req.body.titulo, 
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        estado: req.body.estado,
        categoriaDaMemoria: req.body.categoriaDaMemoria,
        sentidoAtivado: req.body.sentidoAtivado,
        dataDaMemoria: req.body.dataDaMemoria, 
        descricao: req.body.descricao
    });

    try {
        const saveNewMemory = await inputNewMemory.save()
        res.status(201).json({
            mesagem: "A memória foi criada com sucesso! Você pode visualizar ela logo abaixo:", 
            ...saveNewMemory.toJSON()
        });
    } catch (err) {
        res.status(400).json({ mensagem: err.message });
    }

};


const deleteMemoryById = (req, res) => {
    const inputId = req.params.id;


    Memory.findByIdAndRemove(inputId, (err) => {
        if (err) {
            res.status(404).json({ mensagem: "Memória não encontrada. Por favor, digite um id válido." })
        } else {
            res.status(200).json({ mensagem: "Memória apagada com sucesso!" })
        }
    })


};


const putMemoryById = (req, res) => {

};


module.exports = {
    postNewMemory,
    deleteMemoryById,
    putMemoryById
};