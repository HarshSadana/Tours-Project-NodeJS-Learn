const express = require('express');

const app = express();  // Now express will add methods to the app variable.
const morgan = require('morgan');  // Using the third party middleware.

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json());  // express.json is the middleware. Middleware is basically a function that can change the incoming request data. We are making sure that the incoming data is in the json format.

// Note -> app.use puts the function inside it to the middleware stack, express.json alos returns us the function.
// The middlewares are added in the stack in the same order as they are written in the code. So always define the middlewares before the routes.

//app.use(morgan('dev'))  // Whenever any request will hit, it will make sure to give the information of the request in the console.

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

// This is the way we can serve static files from the folder...
app.use(express.static(`${__dirname}/public`)) // for accessing the static files. Since the static files are there in the public folder, now automatically the route is set as the public.
// Now write the localhost:4000/overview.html in the browser.

// This is also the middleware and sets the route as teh public.

// Creating our own middleware.
app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next();  // It is necessary to called the next function, if not called it will stay here only and no response will be sent.
})

// express.json is used to access the req.body object 
app.use((req, res, next) => {
    // Suppose we want to add the request time of the request.
    req.requestTime = new Date().toISOString();
    next();
})

// routing means to define that how our application is responding to the certain client request. We must also define the http method used for that request.
// app.get('/', (req, res) => {
    // Now here we will be sending back the data.
    // We can also specify the status code.
    // res.status(200).send("Hello from the server side!");

    // If you want to send jsn to the client.
//     res.status(200).json({"message": "Hello from the server side", "app": "Natours"});
// })

// Note -> get is the http method for the request, similarly there is also the post.

// Similarly we can also write for the post.
// app.post('/', () => {
//     console.log('Ready to post to the server.');
// })



// app.get('/api/v1/tours', getAllTours)

// same endpoint but different http request type.
// app.post('/api/v1/tours', createTour)

// Defining a route that can take up the variable in the route.

// If u want to make any param optional, that write question mark after it.
// 127.0.0.0:4000/api/v1/tours/:id/:x/:y?
// app.get('/api/v1/tours/:id', getATour)

// update request
// app.patch('api/v1/tours/:id', updateTour)

// app.delete('api/v1/tours/:id', deleteTour)






// Everything is the middleware, even the routes, everything between recieving the requests and sending the response is the middleware.

// All the middlewares combined together is called as the middleware stack.

// Note each middleware has the access to the req, res and the next, and it is very necessary to call the nxt at the end of the middleware.

// Below routes are the sub application made inside the bigger application.

app.use('/api/v1/tours', tourRouter);  // for '/api/v1/tours' we want to apply the tour router middleware.

// Implementing the users routes.
app.use('/api/v1/users', userRouter); // Similarly here we want to apply the user router middleware.



module.exports = app