import { testService } from "../../services/testService";
import { alertType } from "./types/alertType";
import { testType } from "./types/testType";

export const getTests = () => async (dispatch) => {
  const res = await testService.getTests();

  dispatch({
    type: testType.GET_TESTS_DETAIL,
    tests: res.data,
  });
};

export const getTest = (testId) => async (dispatch) => {
  try {
    const res = await testService.getTest(testId);

    dispatch({
      type: testType.GET_TEST_DETAIL,
      test: res.data,
    });
  } catch (error) {
    dispatch({
      type: alertType.error,
      error: error.toString(),
    });
  }
};

export const createTest = (request) => async (dispatch) => {
  try {
    await testService.createTest(request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Tests created successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const updateTest = (testId, request) => async (dispatch) => {
  try {
    await testService.updateTest(testId, request);

    dispatch({
      type: alertType.SUCCESS,
      message: "Tests updated successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};

export const deleteTest = (testId) => async (dispatch) => {
  try {
    const res = await testService.deleteTest(testId);

    dispatch({
      type: testType.REMOVE_TEST,
      tests: res.data,
    });

    dispatch({
      type: alertType.SUCCESS,
      message: "Tests deleted successfully!!",
    });
  } catch (error) {
    dispatch({
      type: alertType.ERROR,
      errror: error.response.data.message,
    });
  }
};
