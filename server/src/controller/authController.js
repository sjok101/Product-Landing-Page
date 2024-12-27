const User = require('../models/User');

exports.createUser = async(req, res) => {
    const { username, password } = req.body;

    try{
        const user = await User.findOne({username});
        if(!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful.'});
    }catch(error){
        res.status(500).json({message: `${error}`});
    }

}