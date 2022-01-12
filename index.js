const express = require('express');
const app = express();
const port = 8000;

// use express route
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`error in running the server : ${err}`);
    } console.log(`Server is running on port: ${port}`);
})