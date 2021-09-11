const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token não informado." });
    } else {
        const justToken = authHeader.split(' ')[1];

        if (!justToken) {
            res.status(401).json({ message: "Erro de formatação do token."});
        } else {
            jwt.verify(justToken, SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: "Token inválido." });
                } else {
                    // decoded é o usurario que requisitou o token
                    req.userId = decoded._id;
                    return next();
                };
            });
        };
    };
};