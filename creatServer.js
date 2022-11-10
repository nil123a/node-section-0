// import http module

let http = require('http');

// create server

let server =http.createServer(function(req,res){
    res.end('my first server')

});
// run server
server.listen(5050);
console.log('server runsuccse');

