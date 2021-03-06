// Dependancies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", (req, res) => {
  res.redirect("/burgers");
});
router.get("/burgers", (req, res) => {
// express callback response by calling burger.selectAllBurger
  burger.all((burgerData) => {
// wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
    });
  });

// post route -> back to index
  //hint: burger.create
router.post("/burgers/create", (req, res) => {
  burger.create(req.body.burger_name, (result) => {
// wrapper for orm.js that using MySQL insert callback will return a log to console,
// render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});
// put route -> back to index
router.put("/burgers/:id", (req, res) => {
  burger.update(req.params.id, (result) => {
// wrapper for orm.js that using MySQL update callback will return a log to console,
// render back to index with handle    
    console.log(result);
// Send back response and let page reload from .then in Ajax    
    res.sendStatus(200);
  })
});
module.exports = router;
