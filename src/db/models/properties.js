/** @format */

import sequelize from "../connection.js";
import sequel from "sequelize";

const { DataTypes } = sequel;

const Properties = sequelize.define("properties", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNul: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  beds: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ratings: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availabilty: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

export default Properties;
