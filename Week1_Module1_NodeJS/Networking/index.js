//this is an example of how the http works
const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';

const port = 3000;

//So the request and response are the two parameters to the function that we supply as a parameter to the createServer method here
const server = http.createServer((req,res) =>{
  console.log('req.headers request for '+ req.url+' by method ');

  // res.statusCode = 200;
  // res.setHeader('Content-Type','text/html');
  // res.end('<html><body><h1> Hello World</h1></body></html>');
    if (req.method == 'GET'){
        var fileUrl;

        if (req.url == '/' ){
            fileUrl = '/index.html';
        }else{
            fileUrl = req.url;
        }

        var filePath = path.resolve( './public'+fileUrl);
        const fileExt = path.extname(filePath)
        if (fileExt == '.html'){
            //exist is the return parameter of the callback function
            fs.exists(filePath, (exists) => {
                if (!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1> Error 404 ' + fileUrl +' not Found</h1></body></html>');

                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                //read the file the send it out
                fs.createReadStream(filePath).pipe(res);
            })
        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1> Error 404 ' + fileUrl +' not an HTML file</h1></body></html>');

            return;
        }
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1> Error 404 ' + req.method +' not supported </h1></body></html>');

        return;
    }
})


server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});