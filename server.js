const express = require("express");
const path = require("path");
const app = express();
const user = require("./route/user") // route to user request Handler

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "./", "public"))); // access the css file

app.use("/user", user); //this handel my all user request

app.use((req, res, next) =>{ //handel invalide URLs or request 
   res.render("404")});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
