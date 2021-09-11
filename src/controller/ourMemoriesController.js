const Memories = require("../model/memorySchema");
const mongoose = require("mongoose");


const getAllMemories = async (req, res) => {
    try {
        const allMemories = await Memories.find();
        res.status(200).json(allMemories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getMemoriesByCity = async (req, res) => {
    const inputCity = req.query.cidade;

    try {
        const memoriesFound = await Memories.find({ cidade: inputCity });
        res.status(200).json(memoriesFound);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};


const getMemoriesById = async (req, res) => {
    const inputId = req.params.id;

    try {
        const memoryFound = await Memories.findById(inputId);
        res.status(200).json(memoryFound);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};


module.exports = {
    getAllMemories,
    getMemoriesByCity,
    getMemoriesById
};