import { roleType } from "../actions/types/roleType";

const initialState = {
  roles: [],
};
export const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case roleType.GET_ROLES_DETAIL:
      return { ...state, roles: action.roles };
    default:
      return state;
  }
};
