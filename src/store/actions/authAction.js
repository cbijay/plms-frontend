import { authService } from "../../services/authService";
import { authType } from "./types/authType";
import { alertType } from "./types/alertType";

export const login = (request, from) => async (dispatch) => {
  try {
    dispatch({
      type: authType.LOGIN_REQUEST,
    });

    const res = await authService.login(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Login Successful!!",
    });

    setTimeout(() => {
      dispatch({
        type: authType.LOGIN_SUCCESS,
        user: res.data,
      });
      dispatch({
        type: alertType.CLEAR,
      });
    }, 1500);
  } catch (error) {
    dispatch({
      type: authType.LOGIN_FAILURE,
      error: error.response.data.message,
    });

    dispatch({
      type: alertType.ERROR,
      message: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  authService.logout();
  dispatch({
    type: authType.LOGOUT,
  });
};
