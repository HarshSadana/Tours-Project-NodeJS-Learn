const http = require('http');
const fs = require('fs');
const url = require('url');

// Why we are reading the file again again and again when we are hitting the request. We should read the file only one and that too synchronously, so that complete reading of the file is done.

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {

    // console.log(req.url);
    // const pathName = req.url;
    // console.log(url.parse(req.url, true));  // Now the query will come into an object.

    const {query, pathname} = url.parse(req.url, true);
    console.log(query, "It is query");
    console.log(pathname, "It is pathname");

    if(pathname === '/' || pathname == '/overview'){
        res.end('This is an overview.');
    }
    else if(pathname === '/product'){
        res.end('This is the product');
    }
    else if(pathname === '/api'){

        // In place of .we can also write the dirname variable. It holds the current directory.
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            console.log(data);
            // Initially the content of the file will be the string.
            res.writeHead(200, { 'Content-type': 'application/json'});
            const productData = JSON.parse(data); 
            res.end(data);
        })
    }
    else{
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