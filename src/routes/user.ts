import { FastifyInstance, FastifyRequest } from "fastify";
import { User } from "../models";

// Define a type for the route params
interface Params {
  id: string;
}

async function userRoutes(fastify: FastifyInstance) {
  // Create User
  fastify.post("/users", async (request, reply) => {
    const { name, email } = request.body as any;
    const user = await User.create({ name, email });
    reply.send(user);
  });

  // Get all users
  fastify.get("/users", async (request, reply) => {
    const users = await User.findAll();
    reply.send(users);
  });

  // Get user by ID
  fastify.get(
    "/users/:id",
    async (request: FastifyRequest<{ Params: Params }>, reply) => {
      const user = await User.findByPk(request.params.id);
      if (user) {
        reply.send(user);
      } else {
        reply.status(404).send({ message: "User not found" });
      }
    }
  );

  // Update User
  fastify.put(
    "/users/:id",
    async (request: FastifyRequest<{ Params: Params }>, reply) => {
      const { name, email } = request.body as any;
      const user = await User.findByPk(request.params.id);
      if (user) {
        user.name = name;
        user.email = email;
        await user.save();
        reply.send(user);
      } else {
        reply.status(404).send({ message: "User not found" });
      }
    }
  );

  // Delete User
  fastify.delete(
    "/users/:id",
    async (request: FastifyRequest<{ Params: Params }>, reply) => {
      const user = await User.findByPk(request.params.id);
      if (user) {
        await user.destroy();
        reply.send({ message: "User deleted" });
      } else {
        reply.status(404).send({ message: "User not found" });
      }
    }
  );
}

export default userRoutes;
