//required
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const fs = require('fs');

//Mustache
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

app.set("views", __dirname + "/views");
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
// Express validator (must be directly after body parser)
app.use(expressValidator());

app.use(express.static("public"));
app.use(require("./todo"))

//listen to connect app to port
app.listen(3000, function() {
  console.log("App works at http://localhost:3000");
})
