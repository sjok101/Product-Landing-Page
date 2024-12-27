const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectMongo = async() => {
    try{
        const connectionData = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo is connected: ${connectionData.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

}
module.exports = connectMongo;