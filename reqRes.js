//import http module 
let http = require('http');
// create server
let server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>this is home page</h1>');
        res.end();

    }else if(req.url=='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>this is about page</h1>');
        res.end();

    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>this is contact page</h1>');
        res.end();

    }
    else if(req.url=='/me'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>this is nayem islam  page</h1>');
        res.end();

    }
    else if(req.url=='/location'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>sylhet bangladesh</h1>');
        res.end();

    }
});

//run server
server.listen(3030);
console.log("this server is running");