import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "tsDatabse", // Database name
  process.env.DB_USER || "postgres", // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST || "localhost", // Database host
    dialect: "postgres", // Database dialect
    port: Number(process.env.DB_PORT) || 5432, // Database port
  }
);

export default sequelize;

// // Test the connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

export { sequelize };
