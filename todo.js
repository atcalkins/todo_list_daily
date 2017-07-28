const express = require('express');
const router = express.Router();
module.exports = router;

router.get("/public/styles.css", (req, res) => {
  res.send(fs.readFileSync("/styles.css"));
})

router.get("/", (req, res) => {
	res.render("index", { todo: todo });
});

let todo = [];

router.post("/todo", (req, res) => {
	console.log("working", req.body);
  res.redirect("/");
	});
// });
