const express = require('express');
const http = require('http');
// to print the
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
//end point and call back function
app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    //it'll continue on to look for additional specifications down below here, which will match this dishes endpoint
    next();

});

//modification in the all will carried on here
app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you!');
});

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
