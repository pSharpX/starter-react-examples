import React, { useState, useEffect } from "react";
import { Route, Redirect, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Auth } from "aws-amplify";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const [authenticated, setAuthentication] = useState(true);

  useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();
        console.log(user);
        if (user) {
          setAuthentication(true);
        } else {
          setAuthentication(false);
        }
      } catch (e) {
        console.error(e);
        setAuthentication(false);
      }
    })();
  });

  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        return authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
