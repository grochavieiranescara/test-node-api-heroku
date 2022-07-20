import pg from "pg";

const { Pool, Client } = pg;

const credentials = {
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root",
  database: "cmddb",
};

async function poolDemo() {
  console.log("inicio do pool");
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT * FROM students");
  await pool.end();
  console.log("fim do pool");

  return now;
}

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT * FROM students");
  await client.end();

  return now;
}

(async () => {
  console.log("tentando...");
  const poolResult = await poolDemo();
  console.log(poolResult.rows);

  const clientResult = await clientDemo();
  console.log(clientResult.rows);
})();
