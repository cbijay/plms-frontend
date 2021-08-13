import { doctorsType } from "../actions/types/doctorsType";

const initialState = {
  doctors: [],
};
export const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case doctorsType.GET_DOCTORS_DETAIL:
      return { ...state, doctors: action.doctors };

    case doctorsType.GET_DOCTOR_DETAIL:
      return { ...state, doctor: action.doctor };

    case doctorsType.REMOVE_DOCTOR:
      return {
        ...state,
        doctors: state.doctors.filter((doctor) => doctor.id !== action.doctors),
      };
    default:
      return state;
  }
};
