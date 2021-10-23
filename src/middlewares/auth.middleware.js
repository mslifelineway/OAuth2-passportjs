const { statusCodes, messages } = require("../utils/constants");

exports.isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(statusCodes.forbidden).json({
      message: messages.forbidden,
    });
  }
};
