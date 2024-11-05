import { Sequelize } from "sequelize";
import fastifyPlugin from "fastify-plugin";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "postgres",
});

export default fastifyPlugin(async (fastify, opts) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    fastify.decorate("sequelize", sequelize);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
