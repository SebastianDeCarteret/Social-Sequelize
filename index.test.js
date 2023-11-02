const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  beforeEach(async () => {
    await db.sync({ force: true }); // clears whole database
  });

  describe("User tests:", () => {
    it("User is assosiated correctly with Profile", async () => {
      await User.create({
        username: "Seb",
        email: "seb@email.com",
      });
      const user = await User.findByPk(1);
      const profile = await user.createProfile({
        bio: "about me",
        profilePicture: "image",
        birthday: "2000-01-01",
      });
      expect(profile.bio).toBe("about me");
      expect(profile.profilePicture).toBe("image");
      expect(profile.birthday).toBe("2000-01-01");
    });
    it("Profile is assosiated correctly with User", async () => {
      await Profile.create({
        bio: "about me",
        profilePicture: "image",
        birthday: "2000-01-01",
      });
      const profile = await Profile.findByPk(1);
      const user = await profile.createUser({
        username: "Seb",
        email: "seb@email.com",
      });
      expect(user.username).toBe("Seb");
      expect(user.email).toBe("seb@email.com");
    });
  });
});
