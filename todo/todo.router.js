import express from "express";
import { body, validationResult } from "express-validator";

import { listTodos, createTodo, updateTodo, deleteTodo } from "./todo.service.js";

export const todoRouter = express.Router();

// GET: List all the Todos
todoRouter.get("/", async (_request, response) => {
  try {
    const todos = await listTodos();
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
});

// POST: create Todo
todoRouter.post(
  "/",
  body("title").isString(),
  body("completed").isBoolean(),
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const todo = request.body;
      const newTodo = await createTodo(todo);
      return response.status(201).json(newTodo);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
);

// PUT: Update Todo
todoRouter.put(
  "/:id",
  body("title").isString(),
  body("completed").isBoolean(),
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(request.params.id, 10);
    try {
      const todo = request.body;
      const updatedTodo = await updateTodo(todo, id);
      return response.status(201).json(updatedTodo);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
);

todoRouter.delete("/:id", async (request, response) => {
  const id = parseInt(request.params.id, 10);
  try {
    await deleteTodo(id);
    return response.status(204).json(`Todo ${id} was successfully deleted`);
  } catch (error) {
    return response.status(500).json(error.message);
  }
});
