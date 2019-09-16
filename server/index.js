const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("build"));

app.get("/", (req, res) => res.send("hello express"));

app.use((req, res, next) => {
  res.status(404).send("sorrryyy cant find that!!!");
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
