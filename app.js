// packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models")
// starting express app
const app = express();
const routes = require("./routes");
const passport = require("./config/passport");
const session = require("express-session")
// setting view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(session({ secret: 'my best friend', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// routes mnager
app.use(routes);
// server listeing for request
db.sequelize.sync().then(function () {
  app.listen(3000, function () {
    console.log("server is liT!!!!!!!");
  });
});
