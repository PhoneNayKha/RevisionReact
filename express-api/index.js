const express = require("express");
const app = express();

app.get("/posts", (req, res) => {
  res.json({ data: "posts" });
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: `postNo - ${id}` });
});

app.listen(8080, () => {
  //npx nodemon index.js
  console.log("Express API running at 8080.");
});
