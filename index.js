import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bot is online!");
});

app.get("/callback", (req, res) => {
  res.send("Verification successful!");
});

app.listen(3000, () => {
  console.log("Web server running on port 3000");
});

import './src/index.js';
