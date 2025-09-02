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

//relacion mucho a mucho
articleModel.belongsToMany(tagModel, {
  through: articleTagModel,
  foreignKey: "tag_id",
  as: "tag",
});

tagModel.belongsToMany(articleModel, {
  through: articleModel,
  foreignKey: "article_id",
  as: "article",
});

//config necesaria para obtener los datos

articleTagModel.belongsTo(articleModel, {
  targetKey: "id",
  foreignKey: "article_id",
});

articleTagModel.belongsTo(tagModel, { targetKey: "id", foreignKey: "tag_id" });
