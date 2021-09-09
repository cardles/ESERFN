const Memories = require("../model/memorySchema");
const mongoose = require("mongoose");


const getAllMemories = async (req, res) => {
    const allMemories = await Memories.find()
    res.status(200).json(allMemories)
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