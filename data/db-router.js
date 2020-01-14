const express = require("express");

const Posts = require("./db");

const router = express.Router();

router.get("/", (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retriving posts"
      });
    });
});

router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong" });
    });
});

router.post("/", (req, res) => {
  if (!req.body.contents || !req.body.title) {
    res.status(404).json({ message: "please enter titile and contents" });
  } else {
    Posts.insert(req.body)
      .then(posts => {
        res.status(201).json(posts);
      })
      .catch(err => {
        res.status(500).json({ message: "something went wrong" });
      });
  }
});

module.exports = router;
