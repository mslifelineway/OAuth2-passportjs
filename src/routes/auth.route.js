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

const passport = require("passport");
const { isUserAuthenticated } = require("../middlewares/auth.middleware");

module.exports = (router, server) => {
  //google auth request handler
  router.get(
    routePaths.googleAuth,
    passport.authenticate(
      authTypes.google,
      { scope: ["profile", "email"] }
    )
  );

  //google auth callback handler
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

  //github auth request handler
  router.get(
    routePaths.githubAuth,
    passport.authenticate(authTypes.github, { scope: ["user:email"] })
  );

  //github auth callback handler
  router.get(
    routePaths.gitHubAuthCallback,
    passport.authenticate(authTypes.github, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  //linkedin auth request handler
  router.get(
    routePaths.linkedinAuth,
    passport.authenticate(authTypes.linkedin, {
      scope: ["r_basicprofile", "r_emailaddress"],
    })
  );

  //linkedin auth callback handler
  router.get(
    routePaths.linkedinAuthCallback,
    passport.authenticate(authTypes.linkedin, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  //facebook auth request handler
  router.get(
    routePaths.facebookAuth,
    passport.authenticate(authTypes.facebook, {
      // scope: [authScopes.profile],
      scope: ["user_friends", "manage_pages"],
    })
  );

  //facebook auth callback handler
  router.get(
    routePaths.facebookAuthCallback,
    passport.authenticate(authTypes.facebook, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  //twitter auth request handler
  router.get(
    routePaths.twitterAuth,
    // (req, res, next) => {
    //   console.log("===> twitter auth calling..");
    //   next();
    // },
    passport.authenticate(authTypes.twitter, {
      // scope: [authScopes.profile],
      scope: ["user_friends", "manage_pages"],
    })
  );

  //twitter auth callback handler
  router.get(
    routePaths.twitterAuthCallback,
    passport.authenticate(authTypes.twitter, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  //spotify auth request handler
  router.get(
    routePaths.spotifyAuth,
    passport.authenticate(authTypes.spotify, {
      scope: ["user-read-email", "user-read-private"],
    })
  );

  //spotify auth callback handler
  router.get(
    routePaths.spotifyAuthCallback,
    passport.authenticate(authTypes.spotify, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  //twitch auth request handler
  router.get(
    routePaths.twitchAuth,
    passport.authenticate(authTypes.twitch, {
      scope: "user_read",
    })
  );

  //twitch auth callback handler
  router.get(
    routePaths.twitchAuthCallback,
    passport.authenticate(authTypes.twitch, {
      failureRedirect: routePaths.authFail,
      session: true,
    }),
    function (req, res) {
      return res.redirect(routePaths.authSuccess);
    }
  );

  //get authenticated user
  router.get(routePaths.getUser, isUserAuthenticated, (req, res) => {
    return res
      .status(statusCodes.success)
      .json({ user: req.user, message: messages.userFetched });
  });

  //logout
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
