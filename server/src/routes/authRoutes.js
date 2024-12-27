const express = require('express');
const router = express.Router();


const { createUser, loginUser } = require('../controller/authController');
router.post('./signup', createUser);
router.post('./login', loginUser);
module.exports = router;