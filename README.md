# Fastify CRUD API with Sequelize and TypeScript

This is a simple CRUD API built using Fastify, Sequelize, and TypeScript, with PostgreSQL as the database. The API allows you to manage users, providing endpoints to create, read, update, and delete user records.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new user
- Retrieve all users or a user by ID
- Update user information
- Delete a user
- Built with TypeScript for type safety
- Environment configuration using a `.env` file

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Fastify**: Fast and low-overhead web framework for Node.js
- **Sequelize**: Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server
- **PostgreSQL**: Open-source relational database
- **TypeScript**: Superset of JavaScript that compiles to clean JavaScript output

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:

   ```bash
   https://github.com/mogbonna/fastifySequelizeCrud_ts.git
   cd fastifySequelizeCrud_ts
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a PostgreSQL database** for your application. You can use any PostgreSQL client (e.g., pgAdmin, DBeaver, or command line) to create the database.

4. **Create a `.env` file** in the root directory of the project and configure your database settings:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   ```

## Running the Application

1. **Run migrations** to create the necessary database tables. Make sure you have the Sequelize CLI installed globally or use npx:

   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Start the server**:

   ```bash
   npx ts-node src/index.ts
   ```

3. **Access the API** at `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- **POST** `/users` - Create a new user

  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **GET** `/users` - Get all users

- **GET** `/users/:id` - Get a user by ID

- **PUT** `/users/:id` - Update a user

  - **Request Body**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
    ```

- **DELETE** `/users/:id` - Delete a user

## Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/). Here’s how to make requests:

### Using Postman

1. **Create a New User**:

   - Select **POST** method.
   - Enter the URL: `http://localhost:3000/users`.
   - In the **Body** tab, select **raw** and choose **JSON**, then enter the user data:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```

2. **Get All Users**:

   - Select **GET** method and enter `http://localhost:3000/users`.

3. **Get User by ID**:

   - Select **GET** method and enter `http://localhost:3000/users/{id}` (replace `{id}` with the user ID).

4. **Update User**:

   - Select **PUT** method and enter `http://localhost:3000/users/{id}` (replace `{id}` with the user ID).
   - In the **Body**, enter the updated user data.

5. **Delete User**:
   - Select **DELETE** method and enter `http://localhost:3000/users/{id}` (replace `{id}` with the user ID).

### Using cURL

You can also use cURL commands in your terminal. Here are examples:

- **Create a User**:

  ```bash
  curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}'
  ```

- **Get All Users**:

  ```bash
  curl -X GET http://localhost:3000/users
  ```

- **Get User by ID**:

  ```bash
  curl -X GET http://localhost:3000/users/{id}
  ```

- **Update User**:

  ```bash
  curl -X PUT http://localhost:3000/users/{id} -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane@example.com"}'
  ```

- **Delete User**:
  ```bash
  curl -X DELETE http://localhost:3000/users/{id}
  ```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License
