import { Router } from "express";
import pg from "pg";

const routes = Router();
const { Pool, Client } = pg;

const credentials = {
  host: "ec2-54-152-28-9.compute-1.amazonaws.com",
  user: "vwqciqyahidaas",
  port: 5432,
  password: "b4a71f1a0aad39dc7d5a1e3b28ebbaf0d0cd169d22bf393e3e2b6e7fe29cab2c",
  database: "dc0kv56rlgtrjh ",
};

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT * FROM users");
  await client.end();

  return now;
}

routes.get("/", async (req, res) => {
  const clientResult = await clientDemo();
  console.log(clientResult.rows);
  res.status(200).send(clientResult.rows);
});

routes.post("/:id", (req, res) => {
  const { id } = req.params;

  res.send({
    hello: `Hello World with ID of ${id}`,
  });
});

export default routes;
