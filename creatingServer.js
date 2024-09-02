const http = require('http');

// Step-1 Create a server...
// const server = http.createServer((req, res) => //{    // Each time a new request will hit to the server, this callback function will be called
//     res.end('Hello from the server')  
// })

// Standard IP Address for the localhost -> '127.0.0.1'

// server.listen(8000, '127.0.0.1', () => {
//     console.log(`Listening to requests on port 8000`);
// })

// Understanding the routing...
const server = http.createServer((req, res) => {

    console.log(req.url);
    const pathName = req.url;

    if(pathName === '/' || pathName == '/overview'){
        res.end('This is an overview.');
    }
    else if(pathName === '/product'){
        res.end('This is the product');
    }
    else{
       // res.writeHead(404) // Giving the status code. This header should always be given before the response.
       res.writeHead(404, {
        'Content-type' : 'text/html',
        'my-own-header' : 'hello-world'
       })
        res.end('Page not found');
        
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log(`Listening to requests on port 8000`);
})
