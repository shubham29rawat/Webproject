const express = require('express');
const app = express(); //define app
const port = 8000; // define port by default the app runs on port 80

// use express route
app.use('/', require('./routes'));

//app listens to the phone and call back function if there is an error
app.listen(port, function(err){
    if(err){
        console.log(`error in running the server : ${err}`); //interpolation 
    } console.log(`Server is running on port: ${port}`);
})