const User = require('../models/User');
const { generateToken } = require('../util/tokenService')

exports.createUser = async(req, res) => {
    const { username, email, password } = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(404).json({ error: 'User already exists' });
        }

        const user = new User({ username, email, password });
        await user.save();

        //generate token on signup
        const token = generateToken({id: user._id, email: user.email});

        res.status(201).json({ message: 'User created successfully.', token});
    }catch(error){
        res.status(500).json({message: `${error}`});
    }
}

exports.loginUser = async(req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = generateToken({ id: user._id, email: user.email});

        res.status(200).json({ message: 'Login successful.', token});
    }catch(error){
        res.status(500).json({message: `${error}`});
    }

}