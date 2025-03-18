const express = require("express");
const user = express.Router();

user.get("/", (req, res, next) => {
  res.render("home");
  console.log("now i am in home");
});

user.get("/add-home", (req, res, next) => {
  res.render("add-home");
  console.log("i am in add-home");
});

user.post("/home-added", (req, res, next) => {
  res.render("home-added");
});

user.get("/home-list", (req, res, next) => {
  res.render("home-list");
  console.log("i am in home-list");
});

user.get("/favourite", (req, res, next) => {
  res.render("favourite");
  console.log("i am in fevourite");
});



module.exports = user

