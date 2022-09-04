import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { homeRouter } from "./home/home.router";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
