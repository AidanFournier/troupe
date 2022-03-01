// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/sample", (req, res) => {
  console.log(`[${Date.now()}] /api/sample being called ==>`);
  res.json({ messages: ["PLAN with friends.", "PLAN without stress. "] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
