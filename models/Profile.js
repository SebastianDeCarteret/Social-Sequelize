const { db } = require("../db/connection");
const { DataTypes, Model } = require("sequelize");

class Profile extends Model {}

Profile.init(
  {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
  },
  {
    sequelize: db,
    modelName: "profile",
  }
);

module.exports = Profile;
