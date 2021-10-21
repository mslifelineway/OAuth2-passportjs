import { authActions, userActions } from "../actions/actions.types";
import { toast } from "react-toastify";
import { pagePaths } from "../../utils/constants";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  authenticated: false,
  message: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.getUserRequest:
      state = {
        ...state,
        message: "fetching user details...",
        loading: true,
      };
      break;
    case userActions.getUserSuccess:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state = {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        loading: false,
      };
      toast(action.payload.message);
      setTimeout(() => {
        window.location = pagePaths.dashboard;
      }, 1000);
      break;
    case userActions.getUserFailure:
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      toast.error(action.payload.message);
      break;
    case authActions.logoutRequest:
      state = {
        ...state,
        message: "Logging out...",
        loading: true,
      };
      break;
    case authActions.logoutSuccess:
      state = {
        ...state,
        user: null,
        message: action.payload.message,
        loading: false,
      };
      localStorage.removeItem("user");
      toast(action.payload.message);
      break;
    case authActions.logoutFailure:
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      toast.error(action.payload.message);
      break;
    default:
      break;
  }
  return state;
};
export default userReducer;
