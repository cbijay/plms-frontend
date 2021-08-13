import { alertType } from "./types/alertType";
import { companyService } from "../../services/companyService";
import { companyType } from "./types/companyType";

export const getCompany = () => async (dispatch) => {
  const res = await companyService.getCompany();

  dispatch({
    type: companyType.GET_COMPANY_DETAIL,
    data: res.data,
  });
};

export const createUpdateCompany = (request) => async (dispatch) => {
  try {
    await companyService.createUpdateCompany(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Company details saved successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.response.data.message,
    });
  }
};
