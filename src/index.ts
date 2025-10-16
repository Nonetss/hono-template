import { Scalar } from "@scalar/hono-api-reference";
import { z, createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { Handler } from "hono";

const app = new OpenAPIHono();

const rootSchema = z.object({
  message: z.string().openapi({ example: "Hello, World!" }),
});

const rootRoute = createRoute({
  method: "get",
  path: "",
  request: {},
  responses: {
    200: {
      content: {
        "application/json": {
          schema: rootSchema,
        },
      },
      description: "Root endpoint",
    },
  },
});

const rootHandler: Handler = (c) => {
  return c.json({ message: "Hello, World!" });
};

app.openapi(rootRoute, rootHandler);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get("/scalar", Scalar({ url: "/doc" }));

export default app;
