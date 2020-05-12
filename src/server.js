const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
// To send msg in real time - First step!
const server = http.Server(app); // extracting the server from the 'Express.js'
const io = socketio(server);

mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc-1l5gs.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectedUsers = {};
// Listening all users who is logged in the app.
// 'socket' represents the connection the server has with the user.
io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io; // It gives the 'io' to all other files which has 'req'.
  req.connectedUsers = connectedUsers;

  return next();
});


app.use(cors());
// Understand JSON requests.
app.use(express.json());
// Route that returns the img as URL.
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
//app.listen(3333);
server.listen(3333); // The application now is able to listen http request and websocket request.





// Express is a Node.Js framework that you can use for applications that are based on server/s that will "listen" for any input/connection requests from clients. When you use it in Node, it is just saying that you are requesting the use of the built-in Express file from your Node modules.
// Insomnia is a tool that gives supports and test APIs.
// MongoDB Atlas as the database (server).
// mongoose is a tool (library) that facilitates the work with the MongoDB Atlas. It edit, delete some info in the server.
