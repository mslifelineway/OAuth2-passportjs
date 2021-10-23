import React from "react";
import { useSelector } from "react-redux";
import { pagePaths } from "../../utils/constants";

const { Route, Redirect } = require("react-router-dom");

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Route
      {...rest}
      component={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to={pagePaths.auth} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
