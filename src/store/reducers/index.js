import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { authReducer } from "./auth/authReducer";
import { companyReducer } from "./companyReducer";
import { usersReducer } from "./usersReducer";
import { doctorsReducer } from "./doctorsReducer";
import { techniciansReducer } from "./techniciansReducer";
import { groupsReducer } from "./groupReducer";
import { rolesReducer } from "./roleReducer";
import { testsReducer } from "./testReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  roles: rolesReducer,
  company: companyReducer,
  users: usersReducer,
  doctors: doctorsReducer,
  technicians: techniciansReducer,
  groups: groupsReducer,
  tests: testsReducer,
});
