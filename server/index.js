// server/index.js
const path = require("path");
const express = require("express");
const connectDB = require("./config/db.js");
const userRouter = require("./routes/user.js");
const tripRouter = require("./routes/trips.js");

// Connect Database
connectDB();

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

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/trip', tripRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

