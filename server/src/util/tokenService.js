const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn });
}

exports.verifyToken = (token) => {
    try{
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        throw new Error(`Invalid Token: ${error}`);
    }
};