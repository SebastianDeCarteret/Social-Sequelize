const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

// user - profile : one to one
User.hasOne(Profile);
Profile.belongsTo(User);

// user - post : one to many
User.hasMany(Post);
Post.belongsTo(User);

// post - content : one to many
Post.hasMany(Comment);
Comment.belongsTo(Post);

// user - like : many to many
User.belongsToMany(Like, { through: "user-like" });
Like.belongsToMany(User, { through: "user-like" });

module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
