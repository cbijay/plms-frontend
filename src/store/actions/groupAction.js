import { groupService } from "../../services/groupService";
import { alertType } from "./types/alertType";
import { groupType } from "./types/groupType";

export const getGroups = () => async (dispatch) => {
  const res = await groupService.getGroups();

  dispatch({
    type: groupType.GET_GROUPS_DETAIL,
    groups: res.data,
  });
};

export const getOnlyGroups = () => async (dispatch) => {
  const res = await groupService.getOnlyGroups();

  dispatch({
    type: groupType.GET_ONLY_GROUPS,
    onlyGroups: res.data,
  });
};

export const getSubGroups = () => async (dispatch) => {
  const res = await groupService.getSubGroups();

  dispatch({
    type: groupType.GET_SUB_GROUPS_DETAIL,
    subGroups: res.data,
  });
};

export const getGroup = (groupId) => async (dispatch) => {
  try {
    const res = await groupService.getGroup(groupId);

    dispatch({
      type: groupType.GET_GROUP_DETAIL,
      group: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const createGroup = (request) => async (dispatch) => {
  try {
    await groupService.createGroup(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Groups created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateGroup = (groupId, request) => async (dispatch) => {
  try {
    await groupService.updateGroup(groupId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Groups updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteGroup = (groupId) => async (dispatch) => {
  try {
    const res = await groupService.deleteGroup(groupId);

    dispatch({
      type: groupType.REMOVE_GROUP,
      groups: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Groups deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
