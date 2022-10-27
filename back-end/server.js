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
const indexRoute = require("./Router/index.route.js");
const port = 3000;

connectMongo();

const app = express();

// middleware router
app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`server listen to port ${port}`);
});
