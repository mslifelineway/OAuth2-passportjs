require("dotenv").config();
require("../database/mongoose");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const server = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const passport = require("passport");

const { statusCodes, errors, urls } = require("./utils/constants");
const User = require("./models/user.model");
const cookieSession = require("cookie-session");

server.use(
  cors({
    origin: urls.clientUrl,
    credentials: true,
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, doc) => {
    if (err) return done(err, null);
    return done(null, doc);
  });
});

//passport setup milddeware - should be before linking routers
require("./middlewares/passport.setup.middleware");

server.get("/", (_, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

//linking routers
fs.readdirSync(__dirname + "/routes").forEach(function (file) {
  const name = file.substr(0, file.indexOf("."));
  const route = require(`./routes/${file}`)(router, server);
  server.use(`/api/${name}`, route);
});

//error handling
server.use((err, req, res, next) => {
  res.status(err.status || statusCodes.internalServerError);
  return res.json({
    error: {
      status: err.status || statusCodes.internalServerError,
      message: err.message || errors.somethingSeemsWrong,
    },
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log("\nServer couldn't started! \nError : ", err);
    process.exit();
  } else {
    console.log("\nServer is listening on port " + port);
  }
});
