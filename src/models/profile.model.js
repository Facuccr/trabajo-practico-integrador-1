import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const profileModel = sequelize.define("Profile", {
  first_name: { type: DataTypes.STRING(50), allowNull: false },
  last_name: { type: DataTypes.STRING(50), allowNull: false },
  biography: { type: DataTypes.TEXT, allowNull: true },
  avatar_url: { type: DataTypes.STRING(255), allowNull: true },
  birth_date: { type: DataTypes.DATE, allowNull: true },
});

user.hasOne(profileModel, { foreignKey: "user_id", as: "profile" });
profileModel.belongsTo(user, { foreignKey: "user_id", as: "user " });
