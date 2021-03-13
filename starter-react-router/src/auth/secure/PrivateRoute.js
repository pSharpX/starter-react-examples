import React, { useEffect, useState } from "react";
import { Route, Redirect, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Auth } from "aws-amplify";

const PrivateRoute = ({ component: Component, ...rest }) => {
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

const SignOutButton = ({ className, ...rest }) => {
  const [authenticated, setLoggedIn] = useState(true);
  const history = useHistory();

  return authenticated === true ? (
    <p>
      Welcome{" "}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          (async () => {
            try {
              Auth.signOut();
              history.push("/");
            } catch (e) {
              alert("error on sign out!");
              console.error(e);
            }
          })();
        }}
      >
        <FontAwesomeIcon icon="sign-out-alt" /> Sign out
      </button>
    </p>
  ) : (
    <Link to="/login" className={className}>
      You are not logged in. Log In
    </Link>
  );
};

export default PrivateRoute;

export const SecureButton = SignOutButton;
