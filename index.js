import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { homeRouter } from "./home/home.router.js";

dotenv.config();

const PORT = parseInt(process.env.PORT, 10) || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
