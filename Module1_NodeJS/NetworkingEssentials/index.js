//this is an example of how the http works
const http = require('http');

const hostname = 'localhost';

const port = 3000;

//So the request and response are the two parameters to the function that we supply as a parameter to the createServer method here
const server = http.createServer((req,res) =>{
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1> hello world</h1></body></html>');
})


server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});
