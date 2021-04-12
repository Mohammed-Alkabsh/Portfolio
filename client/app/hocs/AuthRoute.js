import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { from } = rest.location.state || { from: { pathname: "/" } };
  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.username ? (
          <Component from={from.pathname} {...rest} />
        ) : (
          <Redirect
            exect
            to={{ pathname: from.pathname, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
