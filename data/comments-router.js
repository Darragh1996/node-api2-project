const express = require("express");

const Comments = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
  Comments.findPostComments(req.query.id)
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
