import { Router } from "express";

const routes = Router();

routes.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "shirt",
    size: "large",
  });
});

routes.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `shirt with your ${logo} and ID of ${id}`,
  });
});

export default routes;
