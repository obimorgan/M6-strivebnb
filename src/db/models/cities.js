/** @format */

import sequelize from "../connection.js";
import sequel from "sequelize";

const { DataTypes } = sequel;

const Cities = sequelize.define("cities", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  city: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  country: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Cities;
