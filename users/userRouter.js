const express = require("express");
const Users = require("./userDb.js");

const router = express.Router();

router.use(express.json());

// get()
router.get("/", (req, res) => {
  Users.get()
    .then((data) => res.json(data))
    .catch((data) =>
      res.status(500).json({
        errorMessage: 'Changed it for Experiments'
      })
    );
});
// getById()
router.get("/:id", (req, res) => {
  Users.getById(req.params.id)
    .then((data) => res.json(data))
    .catch((data) =>
      res.status(500).json({
        errorMessage:'Something New'
      })
    );
});
// insert()
router.post("/", (req, res) => {
  const name = req.body;
  Users.insert(name)
    .then((data) => {
      Users.get().then((data) => res.status(201).json(data));
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
    Users.update(id, { name: req.body.name })
      .then(data => {
        if (data) {
          Users.get()
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

// delete


module.exports = router;
