import React from "react";
import { Redirect, Route } from "react-router-dom";
import privateRoute from "./private";
import Login from "../pages/auth/Login";

const routes = (
  <>
    {privateRoute}
    <Route exact path="/" component={Login} />
    <Redirect from="*" to="/dashboard" />
  </>
);

export default routes;
