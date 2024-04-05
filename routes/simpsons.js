const express = require("express");
const router = express.Router();

const simpsons = require("../simpsons.json");

simpsons.forEach((item, index) => {
  item.id = index + 1;
});

let downloadCount = 0;

router.get("/quotes/:count/:character", (request, response) => {
  downloadCount++;
  const { count = 1, character } = request.params;

  let countAsNumber = Number(count);

  if (Number.isNaN(countAsNumber) || count < 1) {
    response.send("Sorry you did not enter a valid number");
    return;
  }
  if (countAsNumber > simpsons.length) {
    response.send("Sorry you asked for too much data");
    return;
  }

  //if passes all validation

  let copy = [...simpsons];

  copy.sort(() => {
    return 0.5 - Math.random();
  });

  if (character) {
    copy = copy.filter((char) => {
      return char.character.toLowerCase().includes(character.toLowerCase());
    });
  }

  copy.length = countAsNumber > copy.length ? copy.length : countAsNumber;

  response.send(copy);
});

module.exports = router;
