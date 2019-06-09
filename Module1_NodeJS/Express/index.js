const express = require('express');
const http = require('http');
// to print the
const morgan = require('morgan')

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use((req,res,next) =>{
 // next is optional
 // console.log(req.headers);
 // if we access an non-existing file, the page will jump into this content
 res.statusCode = 200;
 res.setHeader('Content-Type','text/html');
 res.end('<html><body><h1>  this is the Express server </h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});
