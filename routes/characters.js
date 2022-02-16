const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route /characters
router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=bLOIPCQksXrpIGgO"
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Route /character/:characterId
router.get("/character", async (req, res) => {
  try {
    if (req.query.characterId) {
      const response = await axios.get(
        "https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=bLOIPCQksXrpIGgO"
      );
      res.json(response.data);
    } else {
      res.json("please, enter a characterId");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;