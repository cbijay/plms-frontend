import { usersService } from "../../services/usersService";
import { alertType } from "./types/alertType";
import { usersType } from "./types/usersType";

export const getUsers = () => async (dispatch) => {
  const res = await usersService.getUsers();

  dispatch({
    type: usersType.GET_USERS_DETAIL,
    users: res.data,
  });
};

export const getUser = (userId) => async (dispatch) => {
  try {
    const res = await usersService.getUser(userId);

    dispatch({
      type: usersType.GET_USER_DETAIL,
      user: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const createUser = (request) => async (dispatch) => {
  try {
    await usersService.createUser(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Users created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateUser = (userId, request) => async (dispatch) => {
  try {
    await usersService.updateUser(userId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Users updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    const res = await usersService.deleteUser(userId);

    dispatch({
      type: usersType.REMOVE_USER,
      users: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Users deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
