const Memories = require("../model/memorySchema");
const mongoose = require("mongoose");


const getAllMemories = async (req, res) => {
    try {
        const allMemories = await Memories.find()
        res.status(200).json(allMemories)
    } catch (err) {
        res.status(500).json({ message: "me tacaro balinha fudeu" })
    }
};

const getMemoriesByCity = (req, res) => {

};

const getMemoriesById = (req, res) => {

};


module.exports = {
    getAllMemories,
    getMemoriesByCity,
    getMemoriesById
};