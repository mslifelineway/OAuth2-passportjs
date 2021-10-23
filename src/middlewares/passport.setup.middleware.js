const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const TwitchStrategy = require("@d-fischer/passport-twitch").Strategy;
const LinkedInStrategy = require("passport-linkedin").Strategy;
const { urls, authTypes } = require("../utils/constants");
const User = require("../models/user.model");

//google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      callbackURL: `/api/${urls.googleAuthRedirectUrl}`,
    },
    function (_, __, profile, cb) {
      const {
        id: googleId,
        displayName: fullName,
        name,
        photos,
        provider,
      } = profile;
      const { email } = profile._json;
      User.findOne({ googleId: profile.id }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            googleId,
            username: name.givenName,
            fullName,
            avatar: photos[0].value,
            email,
            provider,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);

//github strategy
passport.use(
  new GithubStrategy(
    {
      clientID: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
      callbackURL: `/api/${urls.gitHubAuthRedirectUrl}`,
    },
    function (_, __, profile, cb) {
      const { provider } = profile;
      const {
        login: username,
        id: githubId,
        avatar_url: avatar,
        html_url: profileLink,
        name: fullName,
        company: companyName,
        blog: companyWebsiteLink,
        bio,
        followers,
        following,
        email,
      } = profile._json;

      User.findOne({ githubId: profile.id }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            githubId,
            username,
            avatar,
            profileLink,
            fullName,
            companyName,
            companyWebsiteLink,
            bio,
            followers,
            following,
            provider,
            email,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);

//linkedin strategy
passport.use(
  new LinkedInStrategy(
    {
      consumerKey: `${process.env.LINKEDIN_CLIENT_ID}`,
      consumerSecret: `${process.env.LINKEDIN_CLIENT_SECRET}`,
      callbackURL: `/api/${urls.linkedinAuthRedirectUrl}`,
    },
    function (_, __, profile, cb) {
      const { id: linkedinId, displayName: fullName, name, photos } = profile;
      User.findOne({ googleId: profile.id }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            googleId,
            username: name.givenName,
            fullName,
            avatar: photos[0].value,
            authType: authTypes.linkedin,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);

//facebook strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
      clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
      callbackURL: `/api/${urls.facebookAuthRedirectUrl}`,
      profileFields: ["id", "displayName", "photos", "email"],
    },
    function (_, __, profile, cb) {
      const { id: googleId, displayName: fullName, name, photos } = profile;
      User.findOne({ googleId: profile.id }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            googleId,
            username: name.givenName,
            fullName,
            avatar: photos[0].value,
            authType: authTypes.google,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);

//twitter strategy
passport.use(
  new TwitterStrategy(
    {
      consumerKey: `${process.env.TWITTER_CLIENT_ID}`,
      consumerSecret: `${process.env.TWITTER_CLIENT_SECRET}`,
      access_token_key: `${process.env.TWITTER_ACCESS_TOKEN}`,
      access_token_secret: `${process.env.TWITTER_ACCESS_TOKEN_SECRET}`,
      callbackURL: "http://127.0.0.1:3000/auth/twitter/callback",
    },
    function (_, __, profile, cb) {
      const { id: googleId, displayName: fullName, name, photos } = profile;
      User.findOne({ googleId: profile.id }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            googleId,
            username: name.givenName,
            fullName,
            avatar: photos[0].value,
            authType: authTypes.google,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);

//spotify strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: `${process.env.SPOTIFY_CLIENT_ID}`,
      clientSecret: `${process.env.SPOTIFY_CLIENT_SECRET}`,
      callbackURL: `/api/${urls.spotifyAuthRedirectUrl}`,
    },
    function (_, __, profile, cb) {
      const {
        provider,
        id: spotifyId,
        username,
        displayName: fullName,
        profileUrl: profileLink,
        photos,
        country: countryCode,
        followers: followersCount,
        product,
      } = profile;

      const { email } = profile._json;

      User.findOne({ spotifyId: spotifyId }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            spotifyId,
            email,
            username,
            fullName,
            provider,
            profileLink,
            avatar: photos[0].value,
            countryCode,
            followersCount,
            product,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);

//twitch strategy
passport.use(
  new TwitchStrategy(
    {
      clientID: `${process.env.TWITCH_CLIENT_ID}`,
      clientSecret: `${process.env.TWITCH_CLIENT_SECRET}`,
      callbackURL: `/api/${urls.twitchAuthRedirectUrl}`,
    },
    function (_, __, profile, cb) {
      const {
        provider,
        id: twitchId,
        login: username,
        display_name: fullName,
        description,
        profile_image_url: avatar,
        email,
        view_count,
      } = profile;

      User.findOne({ twitchId }, async (err, doc) => {
        if (err) {
          return cb(err, null);
        }

        if (!doc) {
          const newUser = new User({
            twitchId,
            email,
            username,
            fullName,
            provider,
            avatar,
            view_count,
            description,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, doc);
      });
    }
  )
);
