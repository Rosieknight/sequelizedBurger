//Three of the various dependencies needed for this program.
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//The flexible port method.
var PORT = process.env.PORT || 3000;

//I just find this useful.
var app = express();

//The boilerplate for the rest of the server set up, but this is pulling from
//the "public" directory instead of json.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

//Overrides with POST for updates and such.
app.use(methodOverride("_method"));

//This is for handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports routes that the server needs access to.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(PORT);