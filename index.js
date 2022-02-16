// Packages
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(formidable());
app.use(cors());

//Routes
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome on my Marvel API" });
});

// Server launch
app.listen(process.env.PORT, () => {
  console.log("It works ! 🦸");
});
// app.listen(3001, () => {
//   console.log("It works !🦸");
// });
