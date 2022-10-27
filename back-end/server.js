// const http = require('http');
// // khởi tạo server
// const server = http.createServer((req, res) => {
//     res.end("Hello World !!!")
// })

// server.listen(port, () => {
//     console.log(`server listen to port ${port}`)
// })
const express = require("express");
const app = express();
const cors = require('cors')

const connectMongo = require("./config/mongoose");
const indexRoute = require("./Router/index.route.js");
const authRoute = require("./Router/auth.route.js");

const port = 3000;
// middleware apply cors add all rq
app.use(cors());
// middleware get info from client by req.body
app.use(express.json());

connectMongo();



// middleware router
app.use("/", indexRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`server listen to port ${port}`);
});
