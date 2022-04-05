const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const url = process.env.ATLAS_URI;
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((data) => {
            console.log(`MongoDB connected with server: ${data.connection.host}`)
        });

};

module.exports = connectDB;
