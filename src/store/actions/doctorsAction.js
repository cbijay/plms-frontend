import { doctorsService } from "../../services/doctorsService";
import { alertType } from "./types/alertType";
import { doctorsType } from "./types/doctorsType";

export const getDoctors = () => async (dispatch) => {
  const res = await doctorsService.getDoctors();

  dispatch({
    type: doctorsType.GET_DOCTORS_DETAIL,
    doctors: res.data,
  });
};

export const getDoctor = (doctorId) => async (dispatch) => {
  try {
    const res = await doctorsService.getDoctor(doctorId);

    dispatch({
      type: doctorsType.GET_DOCTOR_DETAIL,
      doctor: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.response.data.message,
    });
  }
};

export const createDoctor = (request) => async (dispatch) => {
  try {
    await doctorsService.createDoctor(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Doctors created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateDoctor = (doctorId, request) => async (dispatch) => {
  try {
    await doctorsService.updateDoctor(doctorId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Doctors updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteDoctor = (doctorId) => async (dispatch) => {
  try {
    const res = await doctorsService.deleteDoctor(doctorId);

    dispatch({
      type: doctorsType.REMOVE_DOCTOR,
      doctors: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Doctors deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
