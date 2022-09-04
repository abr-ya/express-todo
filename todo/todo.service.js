import db from "../utils/db.server.js";

export const listTodos = async () => {
  return db.todo.findMany({
    select: {
      id: true,
      title: true,
      completed: true,
    },
  });
};

export const createTodo = async (todo) => {
  const { title, completed } = todo;

  return db.todo.create({
    data: {
      title,
      completed
    },
    select: {
      id: true,
      title: true,
      completed: true,
    },
  });
};

export const updateTodo = async (todo, id) => {
  const { title, completed } = todo;
  return db.todo.update({
    where: {
      id,
    },
    data: {
      title,
      completed
    },
  });
};

export const deleteTodo = async (id) => {
  await db.todo.delete({
    where: {
      id,
    },
  });
};
