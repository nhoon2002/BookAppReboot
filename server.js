var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var routes = require('./controller/controller.js');



// var connections = [];



// Create a new express app
var app = express();

var server = require("http").createServer(app);


// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));







// -------------------------------------------------
// var databaseUri = "mongodb://localhost/booklibrary1";
// if (process.env.MONGODB_URI) {
// 	mongoose.connect(process.env.MONGODB_URI);
// } else {
// 	mongoose.connect(databaseUri)
// }
//
// var database = mongoose.connection;


// database.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });
//
// database.once("open", function() {
//   console.log("Mongoose connection successful.");
// });



app.use('/', routes);

server.listen(PORT, function() {
	  console.log("BookApp listening on PORT: " + PORT);
})
