import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
