const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("magic on: port 4000");
});

app.get("/", (req, res) => {
  res.send("magic is working! -port 4000");
});

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});
