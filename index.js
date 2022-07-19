const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    hello: "hello",
    world: "world",
  });
});

app.post("/:id", (req, res) => {
  const { id } = req.params;

  res.send({
    hello: `Hello World with ID of ${id}`,
  });
});

app.listen(PORT, console.log(`It´s alivess on http://localhost:${PORT}`));
