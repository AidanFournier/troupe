// server/index.js

const express = require("express");

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
