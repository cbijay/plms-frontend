import { companyType } from "../actions/types/companyType";

export const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case companyType.GET_COMPANY_DETAIL:
      return {
        ...state,
        data: action.data,
      };
    case companyType.CREATE_UPDATE_COMPANY:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
