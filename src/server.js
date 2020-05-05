const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc-1l5gs.mongodb.net/omnistack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json()); // Understand JSON requests.
app.use(routes);
app.listen(3333);
// Express is a Node.Js framework that you can use for applications that are based on server/s that will "listen" for any input/connection requests from clients. When you use it in Node, it is just saying that you are requesting the use of the built-in Express file from your Node modules.
// Insomnia is a tool to test APIs.
// MongoDB Atlas as the database (server).
// mongoose is a tool (library) that facilitates the work in the MongoDB Atlas. It edit, delete some info in the server.