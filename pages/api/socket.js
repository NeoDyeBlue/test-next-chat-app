import { Server } from "socket.io";

let io = null;

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("socket is running");
    io = res.socket.server.io;
  } else {
    console.log("socket is initializing");
    io = new Server(res.socket.server);
    res.socket.server.io = io;
  }

  // io = new Server(res.socket.server);
  // res.socket.server.io = io;

  io.on("connection", (socket) => {
    socket.on("message", (msg) => {
      socket.broadcast.emit("message-receive", {
        sender: "other",
        message: msg,
      });
      // console.log(msg);
    });
  });

  res.end();
}
