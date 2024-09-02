// server.js file is created to distinguish the express part and the server part.
// In this file there will be the stuff not related to the express.
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});  // To read all the variables from the dotenv file and save them to Node.js env variables


const app = require('./app.js')



// There are many different environments of node.js and express, the two of them are development and production. There are certain permissions given to each of the environment, for eg in the production you can't do debugging and development.

// environment variables are the global variables, that are used to define the environment in which our node app is running.
console.log(app.get('env'));
console.log(process.env);  // These are the variables set by node , and most of them are used by node internally. All the environment variables that we made in the .env configuration file are automatically inside the process.env
// It is conevntion that all variable names inside the .env file will be in uppercase.

// We can also declare the environment variables in the command NODE_ENV=developmet PORT=4000 nodemon server.js

// Setting up the ESLint

// ESLint looks for the errors in our code and the bad coding practices. ESLint is all about coding rules that it inforce to us, these rules are written in .eslintric.json
// Look errors in the problem section of the terminal.

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// second argument is given as the options to deal with the depreciation warning.
mongoose.connect(DB
    // {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false}
)
    .then((con => {
    // console.log(con.connection);
    console.log("DB successfully connected");
}));

const port = 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});