const userActions = {
  getUserRequest: "GET_USER_REQUEST",
  getUserFailure: "GET_USER_FAILURE",
  getUserSuccess: "GET_USER_SUCCESS",
};

const authActions = {
  logoutRequest: "LOGOUT_REQUEST",
  logoutSuccess: "LOGOUT_SUCCESS",
  logoutFailure: "LOGOUT_FAILURE",
};

module.exports = {
  userActions,
  authActions,
};
