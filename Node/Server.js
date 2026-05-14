const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
    
  socket.on("join", (userId) => {
      socket.join(userId.toString());
      console.log(userId +" user connected:", socket.id);
  });

  socket.on("sendMessage", (data) => {
    io.to(data.receiver_id.toString()).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on :3000");
});
