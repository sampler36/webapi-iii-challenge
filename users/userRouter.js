const express = require("express");
const Users = require("./userDb.js");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  Users.get()
    .then((data) => res.json(data))
    .catch((data) =>
      res.status(500).json({
        errorMessage: "The users information could not be retrieved."
      })
    );
});
router.get("/:id", (req, res) => {
    Users.getById(req.params.id)
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "The users information could not be retrieved."
        })
      );
  });
router.get("/:id", (req, res) => {
    Users.insert(req.params.id)
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "The users information could not be retrieved."
        })
      );
  });

module.exports = router;
