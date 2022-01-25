import React from "react";
import { FormInput } from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button.component";
import {
  signInWithGoogle,
  signInWithUser,
} from "../../firebase/firebase.utils";
import "./sign-in.style.scss";
import { useNavigate } from "react-router-dom";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = ({ target }) => {
    const { type, value } = target;
    this.setState({ [type]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithUser(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label={"Email"}
            value={this.state.email}
            type="email"
            name="email"
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            label={"Password"}
            type="password"
            name="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton
              onClick={async () => {
                await signInWithGoogle();
                useNavigate()("/");
              }}
              inverted
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
