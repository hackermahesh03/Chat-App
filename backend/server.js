const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


const messageRoutes = require("./routes/messageRoutes");

app.use(express.json());
app.use(cors());

app.use("/messages", messageRoutes);

mongoose.connect("mongodb+srv://maheshbabunettem:SZvzYvrnXmy2qZm9@cluster0.lvck7cn.mongodb.net/chat?retryWrites=true&w=majority")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API working");
});

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});