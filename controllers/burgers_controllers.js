//Imports the model folder to use its database functions.
var db = require("../models");

//Since this is basically the same thing as a routes folder...
module.exports = function(app) {

  //Routing time! Time to follow a path to the world...
  //This is the path for the info on all the burgers.
  app.get("/", function(req, res) {
    db.my_burger.findAll({})
    .then(function(results){
        /*var hbsObject = {
          my_burgers: results
        };*/
        res.render("index",reulsts);
     });
  });

  //This is the route to make a new burger,
  app.post("/", function(req, res) {
    db.my_burger.create({
      burger_name: req.body.name
    })
    .then(function(results){
      res.json(results);
    });
  });

  //Updates the burger's "devoured" status for new burgers
  app.put("/:id", function(req, res) {
    db.my_burger.eat({
      devoured: req.body.devoured
    },{
      where: {
        id: req.body.id
      }
    }).then(function(results){
      res.json(results);
    });
  });
};