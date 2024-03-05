const io = require("socket.io")(9000, {
  cors: "*",
});

let activeUsers = [];

// init socket server
io.on("connection", (socket) => {
  console.log("Client is Connected");

  // set active user
  socket.on("setActiveUser", (data) => {
    const checkActiveUsers = activeUsers.some((d) => d._id === data._id);

    if (!checkActiveUsers) {
      activeUsers.push({
        userId: data._id,
        socketId: socket.id,
        user: data,
      });
    }

    io.emit("getActiveUser", activeUsers);
  });

  socket.on("disconnect", () => {
    console.log("Client is disconnected");

    // remove offline user
    activeUsers = activeUsers.filter((data) => data.socketId !== socket.id);
    io.emit("getActiveUser", activeUsers);
  });
});
