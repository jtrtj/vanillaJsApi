/*
 * primary file for the api
 *
 */

// dependencies

var http = require("http");
var url = require("url");

// the server should respond to all request with a string
var server = http.createServer(function(req, res) {
  // get the URL and parse it
  // pass true to tell node to use its query string library
  var parsedUrl = url.parse(req.url, true);

  // get the path
  // pathname is the untrimmed path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // get the query string as an object
  var queryStringObject = parsedUrl.query;
  // get the http method
  var method = req.method.toLowerCase();
  // send the response
  res.end("hello world\n");

  // log the request path
  console.log(
    "Request received on path: " +
      trimmedPath +
      " with method: " +
      method +
      " and with these query string parameters: ",
      queryStringObject
  );
});

// start the server and hati listen on port 3000
// listen keeps the node app running
server.listen(3000, function() {
  console.log("the server is listening on port 3000 now.");
});
