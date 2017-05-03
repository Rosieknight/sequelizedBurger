//Imports the model folder to use its database functions.
var db = require("../models");

//Since this is basically the same thing as a routes folder...
module.exports = function(app) {

  //Routing time! Time to follow a path to the world...
  //This is the path for the info on all the burgers.
  

  app.get("/", function(req, res) {
    db.my_burger.findAll({})
    .then(function(results){
        var hbsObject = {
          my_burger: results
        };
        res.render("index", {my_burger:results});
     });
  });

  //This is the route to make a new burger,
  app.post("/", function(req, res) {
    db.my_burger.create({
      burger_name: req.body.name,
      createdAt: req.body.createdAt
    })
    .then(function(results){
      res.redirect("/");
    });
  });

  //Updates the burger's "devoured" status for new burgers
  app.put("/:id", function(req, res) {
    //console.log("Controller sends " + req.body.id);
    db.my_burger.update({
      devoured: req.body.devoured
    },{
      where: {
        id: req.params.id
      }
    }).then(function(results){
      res.redirect("/");
    });
  });
};