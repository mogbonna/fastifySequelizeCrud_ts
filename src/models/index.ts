import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize"; // Ensure the path is correct

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize, // passing the `sequelize` instance is required
    tableName: "users", // specify the table name if it's different
  }
);
