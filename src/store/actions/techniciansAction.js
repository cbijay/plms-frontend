import { techniciansService } from "../../services/techniciansService";
import { alertType } from "./types/alertType";
import { techniciansType } from "./types/techniciansType";

export const getTechnicians = () => async (dispatch) => {
  const res = await techniciansService.getTechnicians();

  dispatch({
    type: techniciansType.GET_TECHNICIANS_DETAIL,
    technicians: res.data,
  });
};

export const getTechnician = (technicianId) => async (dispatch) => {
  try {
    const res = await techniciansService.getTechnician(technicianId);

    dispatch({
      type: techniciansType.GET_TECHNICIAN_DETAIL,
      technician: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.response.data.message,
    });
  }
};

export const createTechnician = (request) => async (dispatch) => {
  try {
    await techniciansService.createTechnician(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "technicians created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateTechnician = (technicianId, request) => async (dispatch) => {
  try {
    await techniciansService.updateTechnician(technicianId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "technicians updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteTechnician = (technicianId) => async (dispatch) => {
  try {
    const res = await techniciansService.deleteTechnician(technicianId);

    dispatch({
      type: techniciansType.REMOVE_TECHNICIAN,
      technicians: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "technicians deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
