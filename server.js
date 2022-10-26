// const http = require('http');
// // khởi tạo server
// const server = http.createServer((req, res) => {
//     res.end("Hello World !!!")
// })

// server.listen(port, () => {
//     console.log(`server listen to port ${port}`)
// })
const express = require("express");
const connectMongo = require("./config/mongoose");
const port = 3000;

connectMongo();



const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/auth/login", function (req, res) {
  res.send("Login");
});
app.get("/api/auth/register", function (req, res) {
  res.send("register");
});

app.listen(port, () => {
  console.log(`server listen to port ${port}`);
});
