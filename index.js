const { application } = require('express');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express(); //define app
const port = 8000; // define port by default the app runs on port 80
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.use(express.urlencoded());

//set up cookie parser 
app.use(cookieParser());

app.use(express.static('./assets'));
// telling brower to use the express-ejs-layout library 
app.use(expressLayouts);

//extract style and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router 
app.use('/', require('./routes'));

//to use ejs
app.set('view engine', 'ejs');
app.set('views','./views');

//app listens to the phone and call back function if there is an error
app.listen(port, function(err){
    if(err){
        console.log(`error in running the server : ${err}`); //interpolation 
    } console.log(`Server is running on port: ${port}`);
})