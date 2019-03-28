const express = require("express");
const Posts = require("./postDb.js");

const router = express.Router();

router.use(express.json());


router.get("/", (req, res) => {
    Posts.get()
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "The users information could not be retrieved."
        })
      );
  });
  router.get("/:id", (req, res) => {
    Posts.getById(req.params.id)
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "The users information could not be retrieved."
        })
      );
  });


  module.exports = router;