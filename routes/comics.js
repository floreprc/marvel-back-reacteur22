const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route /comics & /comics/:characterID
router.get("/comics", async (req, res) => {
  try {
    console.log(req.query.id);
    if (req.query.id) {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.query.id}?apiKey=bLOIPCQksXrpIGgO`
      );
      res.json(response.data);
    } else {
      const response = await axios.get(
        "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=bLOIPCQksXrpIGgO"
      );
      res.json(response.data);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
