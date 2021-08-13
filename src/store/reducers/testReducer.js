import { testType } from "../actions/types/testType";

const initialState = {
  tests: [],
};
export const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case testType.GET_TESTS_DETAIL:
      return { ...state, tests: action.tests };

    case testType.GET_TEST_DETAIL:
      return { ...state, test: action.test };

    case testType.REMOVE_TEST:
      return {
        ...state,
        tests: state.tests.filter((test) => test.id !== action.tests),
      };
    default:
      return state;
  }
};
