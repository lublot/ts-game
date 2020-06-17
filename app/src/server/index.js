const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
const fs = require("fs");
const path = require("path")

app.use(express.static("../public"));

server.listen(3000, () => {
  console.log("Server is listening at port: 3000");
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

io.on('connection', (socket) => {
  socket.broadcast.emit('news', { hello: 'world' });
  socket.on('move', (data) => {
    console.log(data);
  });
});