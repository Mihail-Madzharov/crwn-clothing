import React from "react";
import { FormInput } from "../form-input/form-input";
import { CustomButton } from "../custom-button/custom-button.component";
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
    console.log(type);
    console.log(value);
    this.setState({ [type]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="">
          <FormInput
            handleChange={this.handleChange}
            label={"Email"}
            value={this.state.email}
            otherProps={{ type: "email", name: "email" }}
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            label={"Password"}
            otherProps={{ type: "password", name: "password" }}
          />
          <label htmlFor=""></label>
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
