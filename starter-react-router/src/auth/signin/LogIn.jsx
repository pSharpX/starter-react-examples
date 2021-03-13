import React, { useContext } from "react";
import FacebookSignInContainer from "../../shared/controls/FacebookButton";
import "../signup/SignUp.css";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { challengeType } from "../auth.constants";
import { ObjectUtils } from "../../utill/util";
import { DataContext } from "../../context/DataContext";
import * as actions from "../../context/actions";

function LogIn() {
  const history = useHistory();
  const [state, dispatch] = useContext(DataContext);

  const challengeResolver = (challengeName, user) => {
    switch (challengeName) {
      case challengeType.NEW_PASSWORD_REQUIRED: {
        dispatch(actions.saveUserCognitoData(user));
        history.push("/changePassword");
        break;
      }
      case challengeType.CUSTOM_CHALLENGE: {
        break;
      }
      case undefined:
      case null:
      case "":
        redirectToHome();
        break;
      default:
        throw new Error("no such challenge name recognize exception");
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    try {
      const user = await Auth.signIn(inputEmail.value, inputPassword.value);

      if (!ObjectUtils.empty(user)) {
        challengeResolver(user.challengeName, user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <form className="form-signin" onSubmit={handleOnSubmit}>
      <div className="text-center mb-4">
        <img
          className="mb-4"
          src="http://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
        <p>
          Build form controls with floating labels via the{" "}
          <code>:placeholder-shown</code> pseudo-element.{" "}
          <a href="https://caniuse.com/#feat=css-placeholder-shown">
            Works in latest Chrome, Safari, and Firefox.
          </a>
        </p>
      </div>
      <div className="form-label-group">
        <FacebookSignInContainer onLogin={redirectToHome} />
      </div>

      <div className="form-label-group">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required={true}
          autoFocus={true}
        />
        <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required={true}
        />
        <label htmlFor="inputPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  );
}

export default LogIn;
