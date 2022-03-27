// server/index.js
const path = require("path");
const express = require("express");
const { MongoClient } = require("mongodb");
require('dotenv').config();

async function connectDB(){
  const url = process.env.ATLAS_URI;
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try{
    await client.connect();
    console.log("Connection to MongoDB successful");
  } catch (e){
    console.log("Cannot connect to MongoDB");
    console.error(e);
  } finally {
    await client.close();
  }
}

connectDB().catch(console.error);


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

