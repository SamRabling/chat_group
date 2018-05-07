$(document).ready(function () {
    var name = prompt("Please enter your name:", "User1");
    console.log(name);
    var socket = io();
    $('form').submit(function () {
        socket.emit('chat message', {
            user: name,
            msg: $('#m').val()

        });
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (data) {
        var content = "";
        for (var i = 0; i < data.length; i++) {
            content += "<li>" + data[i].user + " " + "says: " + data[i].msg + "</li>";
        }
        $('#messages').html(content);
        console.log("**********");
    });

});