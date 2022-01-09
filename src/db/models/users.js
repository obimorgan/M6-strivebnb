/** @format */

import sequelize from "../connection.js";
import sequel from "sequelize";

const { DataTypes } = sequel;

const Users = sequelize.define("user", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID4,
  },
  users: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  surname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  account_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Users;
