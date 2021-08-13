import { techniciansType } from "../actions/types/techniciansType";

const initialState = {
  technicians: [],
};
export const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case techniciansType.GET_TECHNICIANS_DETAIL:
      return { ...state, technicians: action.technicians };

    case techniciansType.GET_TECHNICIAN_DETAIL:
      return { ...state, technician: action.technician };

    case techniciansType.REMOVE_TECHNICIAN:
      return {
        ...state,
        technicians: state.technicians.filter(
          (technician) => technician.id !== action.technicians
        ),
      };
    default:
      return state;
  }
};
