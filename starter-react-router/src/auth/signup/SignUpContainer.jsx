import React, { Component } from "react";
import SignUp from "./SignUp";
// import { auth } from '../../core/auth';

function SignUpContainer() {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    try {
      alert(JSON.stringify({ inputEmail, inputPassword }));
      // const user = await auth.doCreateUserWithEmailAndPassword(inputEmail.value, inputPassword.value);
      // this.props.history.push("/");
    } catch (error) {
      // alert(error);
    }
  };

  return <SignUp onSubmit={this.handleSignUp} />;
}

// export default withRouter(SignUpContainer);
export default SignUpContainer;
