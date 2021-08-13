import { groupType } from "../actions/types/groupType";

const initialState = {
  groups: [],
};
export const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case groupType.GET_GROUPS_DETAIL:
      return { ...state, groups: action.groups };

    case groupType.GET_ONLY_GROUPS:
      return { ...state, onlyGroups: action.onlyGroups };

    case groupType.GET_SUB_GROUPS_DETAIL:
      return { ...state, subGroups: action.subGroups };

    case groupType.GET_GROUP_DETAIL:
      return { ...state, group: action.group };

    case groupType.REMOVE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.groups),
      };
    default:
      return state;
  }
};
