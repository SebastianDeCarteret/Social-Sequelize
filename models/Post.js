const { db } = require("../db/connection");
const { DataTypes, Model } = require("sequelize");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "post",
  }
);

module.exports = Post;
