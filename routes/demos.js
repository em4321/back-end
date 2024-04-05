const express = require("express");
const router = express.Router();

router.post("/postDemo", (req, res) => {
  console.log("New POST request", req.body);
  res.send(req.body);
});

router.get("/about/:country", (req, res) => {
  switch (req.params.country) {
    case "uk":
      res.send(`<div>
          <h1>Uk head office</h1>
          <p>0121 548 9856</p>
          </div>`);
      break;

    case "usa":
      res.send(`<div>
          <h1>USA head office</h1>
          <p>865 - 548 - 856</p>
          </div>`);
      break;

    default:
      break;
  }
});

module.exports = router;
