import React, { Component } from "react";
import SignUp from "./SignUp";
// import { auth } from '../../core/auth';

class SignUpContainer extends Component {
  componentDidMount = () => {};

  handleSignUp = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    try {
      // const user = await auth.doCreateUserWithEmailAndPassword(inputEmail.value, inputPassword.value);
      // this.props.history.push("/");
    } catch (error) {
      // alert(error);
    }
  };

  render() {
    return <SignUp onSubmit={this.handleSignUp} />;
  }
}

export default SignUpContainer;
// export default withRouter(SignUpContainer);
