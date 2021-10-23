const mongoose = require("mongoose");

const user = new mongoose.Schema({
  provider: String,
  email: String,
  username: String,
  username: {
    required: true,
    type: String,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: String,
  profileLink: String,
  countryCode: String,
  followersCount: Number,

  //google data
  googleId: {
    required: false,
    type: String,
  },

  //twitter data
  twitterId: {
    required: false,
    type: String,
  },

  //github data
  githubId: {
    required: false,
    type: String,
  },
  companyName: String,
  companyWebsiteLink: String,
  bio: String,
  following: Number,
  followers: Number,

  //linkedIn data
  linkedinId: {
    required: false,
    type: String,
  },

  //spotify data
  spotifyId: {
    required: false,
    type: String,
  },
  product: String,

  //twitch data
  twitchId: {
    required: false,
    type: String,
  },
  viewCount: Number,
  description: String,
});

module.exports = mongoose.model("users", user);
