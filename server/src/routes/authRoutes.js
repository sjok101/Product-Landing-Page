const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware')

const { createUser, loginUser, testProtect } = require('../controller/authController');
router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/testRoute', authenticateToken, testProtect)
module.exports = router;