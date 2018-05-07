const express = require("express");
const app = express();
const server = app.listen(5000, function () {
    console.log('listening on 5000');
});
const io = require('socket.io')(server);

var chat = [];

app.use(express.static(__dirname + "/public"));

io.on('connection', function (socket) {
    console.log('a user connected');
    io.emit('chat message', chat);
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('login', function (users) {
        console.log('username: ' + users);
        io.emit('login', users)
    });
    socket.on('chat message', function (data) {
        console.log('message: ' + data.msg);
        chat.push(data);
        io.emit('chat message', chat);
    });
});