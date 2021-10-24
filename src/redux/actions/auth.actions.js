import { authActions, userActions } from "./actions.types";
import axios from "../Axios/axios";
import { apiPath } from "../../utils/constants";

export const fetchUserDetails = () => {
  return async (dispatch) => {
    dispatch({ type: userActions.getUserRequest });
    try {
      const res = await axios.get(`${apiPath}/auth/getuser`, {
        withCredentials: true,
      });

      if (res.data) {
        dispatch({
          type: userActions.getUserSuccess,
          payload: { user: res.data.user, message: res.data.message },
        });
      }
    } catch (e) {
      const { message = "User couldn't fetched!" } =
        e.response && e.response.data ? e.response.data.error || {} : {};
      dispatch({
        type: userActions.getUserFailure,
        payload: { message },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: authActions.logoutRequest });
    try {
      const res = await axios.get(`${apiPath}/auth/logout`, {
        withCredentials: true,
      });
      dispatch({
        type: authActions.logoutSuccess,
        payload: {
          message: res.message,
        },
      });
    } catch (e) {
      const { message = "couldn't logout!" } = e.response ? e.response : {};
      dispatch({
        type: authActions.logoutFailure,
        payload: { message },
      });
    }
  };
};
