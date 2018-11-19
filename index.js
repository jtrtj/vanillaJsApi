/*
 * primary file for the api
 *
 */

// dependencies

var http = require('http')

// the server should respond to all request with a string
var server = http.createServer(function(req, res){
  res.end('hello world\n')
})

// start the server and hati listen on port 3000
// listen keeps the node app running
server.listen(3000, function(){
  console.log("the server is listening on port 3000 now.")
})