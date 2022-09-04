import express from "express";
import { hello } from "./home.service.js"; 

export const homeRouter = express.Router();

homeRouter.get("/", async (_req, res, _next) => {
  const answer = hello();
  return res.status(200).json(answer);
});
