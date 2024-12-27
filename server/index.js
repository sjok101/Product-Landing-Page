const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectMongo = require('./src/config/db');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectMongo();

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})