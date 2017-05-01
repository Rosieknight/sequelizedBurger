//The variables need to make a connection to the MySQL database.
var mysql = require ('mysql');
var connection;

//I took out my MySQL password. I want to ask questions about loading an
//active db to heroku - if the masking works on github - before I'm
//comfortable leaving it in on a public repo.
if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Letfr33domring!',
		database: "burgers_db"
	});
}

//Actually connects to MySQL.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("You are person number " + connection.threadId + " connecting.");
});

//Exports the connection for ORM to use.
module.exports = connection;
