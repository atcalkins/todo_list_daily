const express = require('express')
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');



// Example code
//const todos = [
//   "Wash the car"
// ];
//
// app.get("/", function (req, res) {
//   res.render('index', { todos: todos });
// });
//
// app.post("/", function (req, res) {
//   todos.push(req.body.todo);
//   res.redirect('/');
// })


app.listen(3000)
