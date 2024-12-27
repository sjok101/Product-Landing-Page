const User = require('../models/User');

exports.createUser = async(req, res) => {
    const { username, email, password } = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(404).json({ error: 'User already exists' });
        }

        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({ message: 'User created successfully.'});
    }catch(error){
        res.status(500).json({message: `${error}`});
    }
}

exports.loginUser = async(req, res) => {
    const { username, email, password } = req.body;

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