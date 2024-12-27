const { verifyToken } = require('../util/tokenService');

exports.authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1] //i.e Bearer [token]
    if(!token){
        return res.status(401).json({error : 'Access denied. No token provided.'})
    }

    try{
        const verified = verifyToken(token);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}