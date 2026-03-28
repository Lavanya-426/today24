const express = require("express");
const path = require("path");

const app = express();
let tasks = [];
let cid = 1;
app.use(express.json());
app.use(express.static("frontend"));

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

app.post("/todo", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "required" });
  const newtask = {
    id: cid++,
    task,
    completed: false,
  };
  tasks.push(newtask);
  res.status(201).json(newtask);
});
