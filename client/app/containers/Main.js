import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Homepage from "../components/Homepage";
import Authform from "../components/forms/Authform";
import ProtectedRoute from "../hocs/ProtectedRoute";
import AuthRoute from "../hocs/AuthRoute";
import { authUser } from "../services/auth/authUser";

import moment from "moment";

const Main = (props) => {
  const [appState, setAppState] = useState({
    error: {},
    success: {},
  });
  const { history, id, username, role } = props;

  const addError = (err) => {
    setAppState({ ...appState, error: err });
  };
  const removeError = () => {
    setAppState({ ...appState, error: {} });
  };
  const addSuccess = (err) => {
    setAppState({ ...appState, success: err });
  };
  const removeSuccess = () => {
    setAppState({ ...appState, success: {} });
  };
  return (
    <main id="content">
      {appState.success.message && (
        <div className="alert alert-success">
          <div className="container">{success.message}</div>
        </div>
      )}
      {appState.error.message && (
        <div className="alert alert-danger">
          <div className="container">{error.message}</div>
        </div>
      )}
      <Switch>
        <Route exact path="/" {...props} component={Homepage} />

        {/* <ProtectedRoute
            {...props}
            exact
            path="/workouts"
            component={Workouts}
          /> */}

        <AuthRoute
          {...props}
          exact
          removeError={removeError}
          onAuth={authUser}
          buttonText="Log in"
          heading="Welcome Back."
          path="/login"
          component={Authform}
        />
        <AuthRoute
          {...props}
          signUp
          exact
          removeError={removeError}
          onAuth={authUser}
          buttonText="Sign me up!"
          heading="Join Warbler today!"
          component={Authform}
        />

        <Route
          path="/*"
          render={(props) => {
            return (
              <div className="container">
                <h2>The page your looking for cannot be found</h2>
              </div>
            );
          }}
        />
      </Switch>
    </main>
  );
};

export default withRouter(Main);
