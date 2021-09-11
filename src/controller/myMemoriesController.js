const Memory = require("../model/memorySchema");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
require("dotenv").config();


const getMyMemories = async (req, res) => {
    
    const memoryFound = await Memory.find({}, err => {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            memoryFound.forEach(oneMemory => {
                let authVerification = oneMemory.usuaria == req.userId;
                if (!authVerification){
                    return res.status(401).json({ message: "Falha na autorização." });
                }

                res.status(200).json(memoryFound);
            });
        }
    });
    
};


const postNewMemory = async (req, res) => {

    let { titulo, endereco, cidade, estado, categoriaDaMemoria, sentidoAtivado, dataDaMemoria, descricao } = req.body;

    const inputNewMemory = new Memory({
        _id: new mongoose.Types.ObjectId(),
        usuaria: req.userId,
        titulo,
        endereco,
        cidade,
        estado,
        categoriaDaMemoria,
        sentidoAtivado,
        dataDaMemoria,
        descricao
    });

    try {
        const saveNewMemory = await inputNewMemory.save();
        res.status(201).json({
            mesagem: "A memória foi criada com sucesso! Você pode visualizar ela logo abaixo:", 
            ...saveNewMemory.toJSON()
        });
    } catch (err) {
        res.status(400).json({ mensagem: err.message });
    }
};


const deleteMemoryById = async (req, res) => {
    const inputId = req.params.id;

    const memoryFound = await Memory.findById(inputId);
    const authVerification = memoryFound.usuaria == req.userId;

    if (!authVerification){
        return res.status(401).json({ message: "Falha na autorização." });
    }

    try {
        await Memory.deleteOne({ _id: inputId });
        res.status(200).json({ mensagem: "Memória apagada com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const putMemoryById = async (req, res) => {
    const inputId = req.params.id;

    const memoryFound = await Memory.findById(inputId);
    const authVerification = memoryFound.usuaria == req.userId;

    if (!authVerification){
        return res.status(401).json({ message: "Falha na autorização." });
    }

    try {
        await Memory.updateOne({ _id: inputId }, { $set: req.body });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

    try {
        const updateMemoryFound = await Memory.findById(inputId);
        res.status(200).json(updateMemoryFound);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};


module.exports = {
    getMyMemories,
    postNewMemory,
    deleteMemoryById,
    putMemoryById
};