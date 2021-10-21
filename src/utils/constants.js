exports.urls = {
  clientUrl: "http://localhost:3000",
  googleAuthRedirectUrl: "auth/google/callback",
};

exports.authTypes = {
  google: "google",
  facebook: "facebook",
  github: "github",
  linkedIn: "linkedIn",
};

exports.authScopes = {
  profile: "profile",
};

exports.routePaths = {
  googleAuth: "/google",
  googleAuthCallback: "/google/callback",
  authFail: `${this.urls.clientUrl}/auth/error`,
  authSuccess: `${this.urls.clientUrl}/auth/success`,
  getUser: "/getUser",
  logout: "/logout",
};

exports.statusCodes = {
  success: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 402,
  notFound: 404,
  conflict: 409,
  unproccessible: 422,
  methodsNotAllowed: 405,
  lengthRequired: 411,
  uriTooLarge: 414,
  unsupportedMediaType: 415,
  internalServerError: 500,
  notImplemented: 501,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
};

exports.errors = {
  somethingSeemsWrong: "Oops! something seems wrong.",
  somethingWentWrong: "Oops! something went wrong.",
};

exports.messages = {
  userCreated: "User created successfully!",
  userNotCreated: "User couldn't create!",
  userAlreadyExists: "User already exists!",
  userNotExists: "User not exists!",
  userUpdated: "User details updated successfully!",
  userNotUpdated: "User couldn't update!",
  adminNotExists: "Admin not exists!",
  adminCreated: "Admin created successfully!",
  adminNotCreated: "Admin could not create!",
  adminAlreadyExists: "Admin already exists!",
  adminNotExists: "Admin not exists!",
  adminUpdated: "Admin details updated successfully!",
  adminNotUpdated: "Admin couldn't update!",
  nothingUpdated: "Nothing to update!",
  allUsersFetched: "All the users details fetched successfully!",
  userFetched: "User details fetched successfully!",
  adminFetched: "Admin details fetched successfully!",
  invalidUserId: "Please provide the valid User id!",
  invalidAdminId: "Please provide the valid Admin id!",
  emailMissing: "Email is required!",
  passwordMissing: "Password is required!",
  emailEmpty: "Email should not be empty!",
  passwordEmpty: "Password should not be empty!",
  wrongCredentials: "Wrong credentials!",
  refreshAuthTokenNotGenerated: "Oops! Refresh auth token couldn't generate!",
  sessionCouldNotSaved: "Oops! Session couldn't save to database!",
  accessTokenNotGenerated: "Oops! access token couldn't generate!",
  authenticated: "Authenticated successfully!",
  accountDisabled:
    "Sorry! your account is disabled. Please contact to the administrator.",
  authorizationTokenRequired: "Please provide the authorization token.",
  invalidAuthorizationToken: "Invalid authorization token.",
  tokenRequired: "Autherization token is required!",
  tokenExpired: "Token has expired!",
  accessDenied: "Access denied!",
  loggedOut: "Logged out!",
  forbidden: "Forbidden! You are not authorized to access.",
};
