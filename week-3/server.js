/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/29/2021
;   Modified By: Keith Hall
;   Description: This app uses express static to run hall-restuarant.html on node server. 
*/

const express = require('express');
var path = require("path");

express.static.mime.define({'application/javascript': ['js']});
const app = express();

app.use( '/', express.static( __dirname + '/' ));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/hall-restaurant.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));