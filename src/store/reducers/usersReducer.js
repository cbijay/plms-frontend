import { usersType } from "../actions/types/usersType";

const initialState = {
  users: [],
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersType.GET_USERS_DETAIL:
      return { ...state, users: action.users };

    case usersType.GET_USER_DETAIL:
      return { ...state, user: action.user };

    case usersType.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.users),
      };
    default:
      return state;
  }
};
