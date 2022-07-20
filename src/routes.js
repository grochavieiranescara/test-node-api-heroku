import { Router } from "express";
import pg from "pg";
const routes = Router();
const { Pool, Client } = pg;

// const credentials = {
//   host: "ec2-54-152-28-9.compute-1.amazonaws.com",
//   user: "vwqciqyahidaas",
//   port: 5432,
//   password: "b4a71f1a0aad39dc7d5a1e3b28ebbaf0d0cd169d22bf393e3e2b6e7fe29cab2c",
//   database: "dc0kv56rlgtrjh ",
// };

const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

async function poolDemo() {
  console.log("inicio do pool");
  const pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  const now = await pool.query("SELECT * FROM users");
  await pool.end();
  console.log("fim do pool");

  return now;
}

routes.get("/", async (req, res) => {
  const pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  const result = await pool.query("SELECT * FROM users");
  await pool.end();
  console.log(result.rows);
  res.status(200).send(result.rows);
});

routes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  const result = await pool.query("SELECT * FROM users WHERE id = " + id);
  await pool.end();
  console.log(result.rows);
  res.status(200).send(result.rows);
});

routes.post("/:id", (req, res) => {
  const { id } = req.params;

  res.send({
    hello: `Hello World with ID of ${id}`,
  });
});

export default routes;
