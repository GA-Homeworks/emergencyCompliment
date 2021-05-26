const express = require("express");
const app = express();
// adding the handlebars... :)
app.set("view engine", "hbs");

app.listen(4000, () => {
  console.log("magic on: port 4000");
});

app.get("/", (req, res) => {
  res.send("magic is working! -port 4000");
});

app.get("/:name", function (req, res) {
  let compliment = randomComp();
  let color = randomColor();
  res.render("layout", {
    name: req.params.name,
    compliments: compliment,
    colors: color,
  });
});

//======= pulled from READ ME
const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
];

const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"];

// math.random

function randomComp() {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
