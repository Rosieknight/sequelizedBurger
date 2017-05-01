var express = require("express");

var router = express.Router();

//Imports the model to use its database functions. Everything is burgers.
var burger = require("../models/burger.js");

//Routing time! Time to follow a path to the world...
//This is the path for the info on all the burgers.
/*router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      my_burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//This is the route to make a new burger,
router.post("/", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

//Updates the burger's "devoured" status for new burgers
router.put("/:id", function(req, res) {
  var devoured = "id = " + req.params.id;

  console.log("devoured", devoured);

  burger.eat({
    devoured: req.body.devoured
  }, devoured, function() {
    res.redirect("/");
  });
});
*/
// Export routes for server.js to use.
module.exports = router;