type Hello = {
  title: string;
  message: string;
};

export const hello = (): Hello => {
  return ({
    title: "Express Home Page",
    message: "Hello from Todo Server with Prisma 2022!",
  });
};
