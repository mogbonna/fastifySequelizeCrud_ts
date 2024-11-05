import Fastify from "fastify";
import db from "./plugins/db";
import userRoutes from "./routes/user";

const fastify = Fastify({ logger: true });

fastify.register(db);
fastify.register(userRoutes);

export default fastify;
