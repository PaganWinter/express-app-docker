const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send({
  	'meta': {
  	  'method': req.method,
  	  'path': req.path,
  	},
  	'message': 'Hello World!'
  });
});

app.listen(8080, function() {
  console.log('app listening on port 8080');
});


