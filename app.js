//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Grocery Shopping", "Review the homework", "Write Diary"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {

  var options = { weekday: 'long', day: 'numeric', month: 'long'};
  var today = new Date();

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { KindofDay: day, newListItems: items });

});

app.post("/", function(req, res){
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
