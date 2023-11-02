const { db } = require("../db/connection");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

module.exports = User;
