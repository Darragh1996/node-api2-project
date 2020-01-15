const express = require("express");
const postRouter = require("./data/posts-router");
const commentsRouter = require("./data/comments-router");

const server = express();

server.use(express.json());
server.use("/api/posts", postRouter);
server.use("/api/comments", commentsRouter);

server.get("/", (req, res) => {
  res.send(`
        <h2>Welcome!</h2>
    `);
});

module.exports = server;
