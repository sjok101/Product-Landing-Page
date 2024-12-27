const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    email: {
        type: email,
        require: true
    },
    password: {
        type: password,
        require: true
    }

})

const User = mongoose.model('User', userSchema);
module.exports = User;