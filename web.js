var express = require('express');
var fs = require('fs');
var buf = require('Buffer');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var index_buffer = fs.readFileSync('index.html');
  var index_string = buf.toString(index_buffer);
  response.send(index_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
