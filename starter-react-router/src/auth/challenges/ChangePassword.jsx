import React, { useContext } from "react";
import "../signup/SignUp.css";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { ObjectUtils } from "../../utill/util";
import { DataContext } from "../../context/DataContext";
import { requiredAttributesHomologator } from "../auth.constants";

function ChangePassword() {
  const history = useHistory();
  const [{ user }] = useContext(DataContext);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const { inputPassword } = event.target.elements;
    const attributes = {};
    Array.from(event.target.querySelectorAll(".required-attribute")).forEach(
      (a) => {
        Object.assign(attributes, { [a["id"]]: a["value"] });
      }
    );

    try {
      if (ObjectUtils.empty(user)) {
        throw new Error("cognito user was not found");
      }

      await Auth.completeNewPassword(user, inputPassword.value, attributes);

      redirectToHome();
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToHome = () => {
    history.push("/");
  };

  const { requiredAttributes } = user.challengeParam || {};
  const attributes = (requiredAttributes || [])
    .map((a) => {
      const attribute = requiredAttributesHomologator[a];
      return {
        ...attribute,
        key: a,
      };
    })
    .sort(ObjectUtils.sort((a) => a.order));

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
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required={true}
        />
        <label htmlFor="inputPassword">New Password</label>
      </div>

      {attributes && attributes.length > 0 && (
        <React.Fragment>
          <div className="mb-4">
            <p>Enter the required information</p>
          </div>
          {attributes.map((a) => (
            <div key={a.key} className="form-label-group">
              <input
                type="text"
                id={a.key}
                className="form-control required-attribute"
                placeholder={a.label}
                required={true}
              />
              <label htmlFor={a.key}>{a.label}</label>
            </div>
          ))}
        </React.Fragment>
      )}

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Change
      </button>
      <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  );
}

export default ChangePassword;
