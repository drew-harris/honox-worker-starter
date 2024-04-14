import { showRoutes } from "hono/dev";
import { Hono } from "hono";
import { createApp } from "honox/server";

const baseApp = new Hono();

baseApp.use(async (c, next) => {
  // c.set("elastic", elastic);
  await next();
});

const app = createApp({
  app: baseApp,
});

showRoutes(app);

export default app;
