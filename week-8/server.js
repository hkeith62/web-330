/*  Title: WEB 340 –  Node.js
;   Author: Keith Hall
;	  Date: 09/18/2021
;	  Description: This is the server file for the what-a-book1 app. Web 330- assignment 7.2.
*/
// Call modules to be used in the app
var express = require("express");  
var path = require("path");
var http = require("http");

var app = express();  

app.use(express.static(path.join(__dirname, "/")));  // Express middleware function that serves static files such as images, CSS files, and JavaScript.

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + "/hall-whatabook2.html")); // Request handler is called to respond when a request to hall-bobs-auto-repair.html is made.
  });

http.createServer(app).listen(8080, function() {          // Starts the server listening on port 8080.  
	console.log("application started on port 8080.");
})