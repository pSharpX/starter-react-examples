import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
// import { withRouter } from "react-router";
// import { auth } from '../auth';
// import * as awsAuth from "../auth/aws-auth";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrivateRoute = ({
  component: Component,
  authenticated,
  authenticating,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticating ? (
          <div>Authenticating...</div>
        ) : authenticated === true || true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const SecureRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true || true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AuthButton = ({ authenticated, history, className, ...rest }) =>
  authenticated === true ? (
    <p>
      Welcome{" "}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          // auth.doSignOut();
          // awsAuth.doSignOut();
          // history.push("/");
          alert("signing out");
        }}
      >
        {/* <FontAwesomeIcon icon="sign-out-alt" /> Sign out */}
      </button>
    </p>
  ) : (
    <Link to="/login" className={className}>
      You are not logged in. Log In
    </Link>
  );

export default PrivateRoute;
// export const ProtectedRoute = connect(({ auth }) => ({ authenticated: auth.authenticated }))(SecureRoute);
export const ProtectedRoute = SecureRoute;
// export const SecureButton = withRouter(connect(({ auth }) => ({ authenticated: auth.authenticated }))(AuthButton));
export const SecureButton = AuthButton;
