import cors from "@fastify/cors";
import fastify from "fastify";
import todoRoutes from "./routes/todo.route.js";
import helmet from "@fastify/helmet";
import { config } from "dotenv";

config();

const app = fastify();

app.register(cors, {
  origin: [process.env.CORS_ORIGIN!, process.env.CORS_LOCALHOST!],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
app.register(helmet, {
  crossOriginResourcePolicy: { policy: "same-site" },
});
await app.register(todoRoutes, { prefix: "/api" });

app.get("/", (req, reply) => {
  reply.send({ hello: "world" });
});

// await app.addHook("onRequest", (req, reply, done) => {
//   console.log(`[${req.method}] ${req.url}`);
//   console.log("=> Headers:", req.headers);
//   console.log("=> Response headers:", reply.getHeaders());
//   done();
// });

export { app };
