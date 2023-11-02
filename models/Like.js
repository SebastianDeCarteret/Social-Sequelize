const { db } = require("../db/connection");
const { DataTypes, Model } = require("sequelize");

class Like extends Model {}

Like.init(
  {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "like",
  }
);

module.exports = Like;
