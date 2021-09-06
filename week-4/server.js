const express = require('express');
var path = require("path");
express.static.mime.define({'application/javascript': ['js']});
const app = express();

app.use( '/', express.static( __dirname + '/' ));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/hall-calorie.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));