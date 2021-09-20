/*  Title: WEB 340 –  Node.js
;   Author: Keith Hall
;	Date: 09/10/2021
;	Description: This is the server page for Bobs-auto-repair app-assignment 5.2
*/
// Call modules to be used in the app
var express = require("express");  
var path = require("path");
var http = require("http");

var app = express();
express.static.mime.define({'application/javascript': ['js']});

app.use( '/', express.static( __dirname + '/' ));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname + "/hall-future-value.html")); // Request handler is called to respond when a request to hall-bobs-auto-repair.html is made.
});

http.createServer(app).listen(8080, function() {                  // Starts the server listening on port 8080.  
	console.log("application started on port 8080.");
})