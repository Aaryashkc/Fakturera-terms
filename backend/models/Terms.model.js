// models/terms.js
import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

const Terms = sequelize.define("Terms", {
  lang: {
    type: DataTypes.ENUM("en", "sv"),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  button: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export { Terms };
