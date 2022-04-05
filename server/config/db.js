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
//     try {
//         await client.connect();
//         console.log('Connection to MongoDB successful');
//     } catch (error) {
//         console.log("Cannot connect to MongoDB");
//         console.log(error);
//     } finally{
//         await client.close();
//     }
// };
module.exports = connectDB;
