import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        //if user is not logged in redirect to login page
        if (!localStorage.getItem("user")) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
        //Return component after logged in
        return <Component {...props} />;
      }}
    />
  );
}

export { PrivateRoute };
