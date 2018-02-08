const express = require('express');

const server = express();

server.get('/test', function(req, res){
    res.send('<h1>working</h1>');
})

server.listen(4000, function(){
    console.log('server is running on port 4000');
})
