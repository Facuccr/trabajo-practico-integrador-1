import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { articleModel } from "./article.model.js";
import { tagModel } from "./tag.model.js";

export const articleTagModel = sequelize.define("article_tag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});
