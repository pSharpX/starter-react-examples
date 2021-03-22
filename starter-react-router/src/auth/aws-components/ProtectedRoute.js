import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "aws-amplify";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setLoggedIn] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();
        console.log(user);
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        console.error(e);
        setLoggedIn(false);
      }
    })();
    return () => {
      mounted = false;
    }
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;