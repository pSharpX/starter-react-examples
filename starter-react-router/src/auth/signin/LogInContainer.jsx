import React from "react";
import LogIn from "./LogIn";
// import * as authentication from '../../core/auth/aws-auth';

function LogInContainer() {
  const handleLogIn = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    // const { changeUserAuthenticationState } = this.props;
    try {
      alert(JSON.stringify({ inputEmail, inputPassword }));
      // const user = await auth.doSignInWithEmailAndPassword(inputEmail.value, inputPassword.value);
      // const user = await authentication.doSignIn(inputEmail.value, inputPassword.value);
      // changeUserAuthenticationState({
      //   isAuthenticated: true,
      //   user
      // });
      // this.afterSuccessfulLogIn();
    } catch (error) {
      // changeUserAuthenticationState({
      //   isAuthenticated: false,
      //   user: undefined
      // });
    }
  };

  const afterSuccessfulLogIn = (response) => {
    console.log(response);
    this.props.history.push("/");
  };

  return <LogIn onSubmit={handleLogIn} afterLogIn={afterSuccessfulLogIn} />;
}

export default LogInContainer;
