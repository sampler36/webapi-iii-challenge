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

  router.post("/", (req, res) => {
    const text = req.body;
    Posts.insert(text)
      .then((data) => {
        Posts.get().then((data) => res.status(201).json(data));
      })
      .catch((error) =>
        res.status(500).json({
          errorMessage: "Reload the ting"
        })
      );
  });
  
  // update()
  router.put('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
      Posts.update(id, {
         text: req.body.text,
         })
        .then(data => {
          if (data) {
            Posts.get()
              .then(data => res.json(data));
          }
          else {
            res.status(404).json({
              errorMessage: 'ID not found'
            })
          }
        })
        .catch(err => {
          res.status(500).json({
            errorMessage: 'Error'
          });
        });
    }
    
  });
  module.exports = router;