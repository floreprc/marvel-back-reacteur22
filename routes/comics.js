const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route /comics & /comics/:characterID
router.get("/comics", async (req, res) => {
  try {
    if (req.query.id) {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.query.id}?apiKey=bLOIPCQksXrpIGgO`
      );
      res.json(response.data);
    } else {
      let toAdd = "";
      if (req.query.title) {
        toAdd += "name=" + req.query.title + "&";
      }
      if (req.query.limit) {
        toAdd += "limit=" + req.query.limit + "&";
      }
      if (req.query.skip) {
        toAdd += "skip=" + req.query.skip + "&";
      }
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?${toAdd}apiKey=bLOIPCQksXrpIGgO`
      );
      res.json(response.data);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
