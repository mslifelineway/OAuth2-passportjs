const {
  routePaths,
  authTypes,
  authScopes,
  messages,
  errors,
  statusCodes,
  urls,
} = require("../utils/constants");
const User = require("../models/user.model");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");
const { isUserAuthenticated } = require("../middlewares/auth");

module.exports = (router, server) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        callbackURL: `/api/${urls.googleAuthRedirectUrl}`,
      },
      function (_, __, profile, cb) {
        User.findOne({ googleId: profile.id }, async (err, doc) => {
          if (err) {
            return cb(err, null);
          }

          if (!doc) {
            const newUser = new User({
              googleId: profile.id,
              username: profile.name.givenName,
            });

            await newUser.save();
            cb(null, newUser);
          }
          cb(null, doc);
        });
      }
    )
  );

  router.get(
    routePaths.googleAuth,
    passport.authenticate(authTypes.google, { scope: [authScopes.profile] })
  );

  router.get(
    routePaths.googleAuthCallback,
    passport.authenticate(authTypes.google, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  router.get(routePaths.getUser, isUserAuthenticated, (req, res) => {
    return res
      .status(statusCodes.success)
      .json({ user: req.user, message: messages.userFetched });
  });

  router.get(routePaths.logout, (req, res, next) => {
    if (req.user) {
      req.session = null;
      req.logout();
      return res
        .status(statusCodes.success)
        .json({ message: messages.loggedOut });
    } else {
      return next({ message: errors.somethingWentWrong });
    }
  });

  return router;
};
