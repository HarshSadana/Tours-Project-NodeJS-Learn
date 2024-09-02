const fs = require('fs');

// To read from a particular file.
// const textIn = fs.readFileSync('intro.txt', 'utf-8');
// console.log(textIn);

// How to write to a particular file.

const textOut = "I am writing to this file."
//fs.writeFileSync('test.txt', textOut);


////////////////////////////////////////// Reading and Writing File Asynchronously. (Non Blocking)

// This will read the file in the background, after reading the file the callback function will automatically called. In the second argument data all the file data will be stored.
fs.readFile('intro.txt', 'utf-8', (err, data) => {
    console.log(data)
});

// Node.js is built around the methodology of callbacks. For eg -> 
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.writeFile('./txt/end.txt', `${data1}/${data2}`, err => {
            console.log("Your file has been written.");
        })
    })
})

console.log("The process is executing!");

// So we will be using Callbacks many times in node.js to make it asynchronous.


