const { MongoClient } = require("mongodb");
require('dotenv').config();

const connectDB = async () => {
    const url = process.env.ATLAS_URI;
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    try {
        await client.connect();
        console.log('Connection to MongoDB successful');
    } catch (error) {
        console.log("Cannot connect to MongoDB");
        console.log(error);
    } finally{
        await client.close();
    }
};

module.exports = connectDB;