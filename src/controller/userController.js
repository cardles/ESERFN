const User = require("../model/userSchema");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const SECRET = process.env.SECRET;


const postNewUser =  async (req, res) => {
    const inputPassword = req.body.senha;
    const hashPassword = bcrypt.hashSync(inputPassword, 10);

    let { nome, email, orientacaoSexual, genero, raca } = req.body;

    const inputNewUser = new User({
        _id: new mongoose.Types.ObjectId(),
        nome,
        email,
        senha: hashPassword,
        orientacaoSexual,
        genero,
        raca
    });

    try {
        const saveNewUser = await inputNewUser.save();
        res.status(201).json({
            mesagem: "Sua conta foi criada com sucesso! Você pode visualizar seus dados logo abaixo:", 
            ...saveNewUser.toJSON()
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const postLogin = async (req, res) => {
    const inputEmail = req.body.email;
    const inputSenha = req.body.senha;
    
    function generateToken(userId = {}) {
        return jwt.sign(userId, SECRET);
    };

    const userFound = await User.findOne({ email: inputEmail });

    if (!userFound) {
        return res.status(404).json({ message: "E-mail ou senha incorretos. Por favor, tente novamente." });
    };

    let validPassword = bcrypt.compareSync(inputSenha, userFound.senha);

    if (validPassword === true) {
        const newToken = generateToken({ _id: userFound._id });
        res.status(200).json({ message: "Login realizado com sucesso!", token: newToken });
    } else {
        res.status(401).json({message: "E-mail ou senha incorretos. Por favor, tente novamente."});
    };   
};


module.exports = {
    postNewUser,
    postLogin
};