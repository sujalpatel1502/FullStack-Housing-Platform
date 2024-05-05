import { Server } from "socket.io";

const io = new Server({
  cors:( {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
   
    onlineUser.push({ userId, socketId });
    console.log('====================================');
    console.log("finallll",onlineUser);
    console.log('====================================');
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    console.log("callleddddd",userId);
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit("getMessage", data);
    console.log("ressssss",receiver);
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
console.log(socket.id);
});

io.listen("4000");

console.log("socket running");