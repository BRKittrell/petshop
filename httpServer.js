var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');
var http = require('http');
var port = process.env.PORT || 8001;
var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('petsPath');
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('petsPath');
      }
      var pets = JSON.parse(petsJSON);
      var petsJSON = JSON.stringify(pets[0]);
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    })
    }else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile(petsPath, 'utf8', function(err, petsJSON) {
        if (err) {
            console.error(err.stack);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('petsPath');
          }
      var pets = JSON.parse(petsJSON);
      var petsJSON = JSON.stringify(pets[1]);
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});
server.listen(port, function() {
  console.log('Listening on port', port);
});
module.exports = server