const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "style.css"));
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
