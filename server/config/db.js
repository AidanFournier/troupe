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
            console.log('MongoDB connection successful');
            console.log(`MongoDB connected with server: ${data.connection.host}`);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
};

module.exports = connectDB;
