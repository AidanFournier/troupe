// server/index.js
const path = require("path");
const express = require("express");
require('dotenv').config();

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string
const url = process.env.ATLAS_URI;
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

    } catch (err) {
        console.log("Cant connect");
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/sample", (req, res) => {
  console.log(`[${Date()}] /api/sample being called ==>`);
  res.json({ messages: ["PLAN with friends.", "PLAN without stress. "] });
});

app.post("/api/register", (req, res) => {
  console.log(`[${Date()}] /api/register being called ==>`);
  res.json({ result: true, timeStamp: Date() });
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

