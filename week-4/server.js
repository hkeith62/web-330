/*  Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;	Date: 08/31/2021
;	Modified By: Keith Hall
;	Description: This is the server page for the calorie app.
*/
const express = require('express'); // Calls Express module
var path = require("path");
express.static.mime.define({'application/javascript': ['js']});
const app = express();

app.use( '/', express.static( __dirname + '/' ));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/hall-calorie.html'));  // Request handler is called to respond when a request to hall-calorie.html is made.
});

app.listen(8080, () => console.log('Listening on port 8080!'));