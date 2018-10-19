var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var path = require('path');

// routing to the set dir
app.use(express.static(path.join(__dirname, "public")), function(req, res, next){
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    console.log(req.path);
});

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });


http.listen(port, () => {
    console.log('listening on %d', port);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chatMessage', (msg) => {
        console.log('message: '+ msg);
        socket.broadcast.emit('display', msg);
    });
});

