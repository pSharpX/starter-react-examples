import React, { Component } from "react";
import LogIn from "./LogIn";
// import * as authentication from '../../core/auth/aws-auth';


class LogInContainer extends Component {

  componentDidMount = () => { };

  handleLogIn = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    // const { changeUserAuthenticationState } = this.props;
    try {
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
  }

  afterSuccessfulLogIn = (response) => {
    console.log(response);
    this.props.history.push("/");
  }

  render() {
    return <LogIn onSubmit={this.handleLogIn} afterLogIn={this.afterSuccessfulLogIn} />;
  }

}

export default LogInContainer;