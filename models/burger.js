//Pulls the exported ORM object from the ORM file.
var orm = require("../config/orm.js");

//I'm tempted to call this something other than 'burger', but I want to remember that
//the var burger is in the burger.js file.
var burger = {
  all: function(cb) {
    orm.selectAll("my_burgers", function(res) {
      cb(res);
    });
  },
  //The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("my_burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //I admit it. This key is named this because I'm getting hungry.
  eat: function(objColVals, condition, cb) {
    orm.updateOne("my_burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//Exports the database functions to the controller. (I'm going to need to draw this out..)
module.exports = burger;