const User = require('../models/User');

exports.createUser = async(req, res) => {

    try{

    }catch(error){
        res.status(500).json({message: `${error}`});
    }

}