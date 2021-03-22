import React, { useState, useEffect } from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { Redirect } from "react-router";

const IniciarSesion = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log(nextAuthState);
      setAuthState(nextAuthState);
      setUser(authData);
    });
  });

  return authState === AuthState.SignedIn && user ? (
    <Redirect to="/about" />
  ) : (
    <AmplifyAuthenticator />
  );
};

export default IniciarSesion;
