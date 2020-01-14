const express = require("express");
const postRouter = require("./data/db-router");

const server = express();

server.use(express.json());
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.send(`
        <h2>Welcome!</h2>
    `);
});

module.exports = server;
