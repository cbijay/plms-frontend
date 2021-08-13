import React from "react";
import { PrivateRoute } from "../components/route/PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import Company from "../pages/company/Company";
import Users from "../pages/users/Users";
import AddUser from "../pages/users/AddUser";
import EditUser from "../pages/users/EditUser";
import Doctors from "../pages/doctors/Doctors";
import AddDoctor from "../pages/doctors/AddDoctor";
import EditDoctor from "../pages/doctors/EditDoctor";
import Technicians from "../pages/technicians/Technicians";
import AddTechnician from "../pages/technicians/AddTechnician";
import EditTechnician from "../pages/technicians/EditTechnician";
import Groups from "../pages/groups/Groups";
import AddGroup from "../pages/groups/AddGroup";
import EditGroup from "../pages/groups/EditGroup";
import Tests from "../pages/tests/Tests";
import AddTest from "../pages/tests/AddTest";
import EditTest from "../pages/tests/EditTest";

const privateRoute = (
  <>
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/company" component={Company} />
    <PrivateRoute path="/users" component={Users} />
    <PrivateRoute path="/add-user" component={AddUser} />
    <PrivateRoute path="/edit-user/:id" component={EditUser} />
    <PrivateRoute path="/doctors" component={Doctors} />
    <PrivateRoute path="/add-doctor" component={AddDoctor} />
    <PrivateRoute path="/edit-doctor/:id" component={EditDoctor} />
    <PrivateRoute path="/technicians" component={Technicians} />
    <PrivateRoute path="/add-technician" component={AddTechnician} />
    <PrivateRoute path="/edit-technician/:id" component={EditTechnician} />
    <PrivateRoute path="/groups" component={Groups} />
    <PrivateRoute path="/add-group" component={AddGroup} />
    <PrivateRoute path="/edit-group/:id" component={EditGroup} />
    <PrivateRoute path="/tests" component={Tests} />
    <PrivateRoute path="/add-test" component={AddTest} />
    <PrivateRoute path="/edit-test/:id" component={EditTest} />
  </>
);

export default privateRoute;
