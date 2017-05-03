//Four of the various dependencies needed for this program.
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

//The flexible port method.
var PORT = process.env.PORT || 8080;

//I just find this useful.
var app = express();

//The boilerplate for the rest of the server set up.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

// Static directory
app.use(express.static("./public"));

//Overrides with POST for updates and such.
app.use(methodOverride("_method"));

//This is for handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports routes that the server needs access to.
require("./controllers/burgers_controllers.js")(app);


//Sync! Before expresss.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});;
