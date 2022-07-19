import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).send({
    hello: "hello",
    world: "world",
  });
});

routes.post("/:id", (req, res) => {
  const { id } = req.params;

  res.send({
    hello: `Hello World with ID of ${id}`,
  });
});

export default routes;
