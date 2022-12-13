
const express = require('express'); //creates an express application using an easy node framework
const app = express(); //should just create an express application
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public')); // this tells the express application to use the directory named "/public" (the one with our html and such)

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
