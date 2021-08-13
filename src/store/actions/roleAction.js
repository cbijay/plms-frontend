import { roleService } from "../../services/roleService";
import { roleType } from "./types/roleType";

export const getRoles = () => async (dispatch) => {
  const res = await roleService.getRoles();

  dispatch({
    type: roleType.GET_ROLES_DETAIL,
    roles: res.data,
  });
};
