import { FormInput } from "../form-input/form-input";
import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import {
  createUser,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleClick = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    const { user } = await createUser(email, password);

    createUserProfileDocument({ ...user, displayName });
    this.setState({});
  };

  render() {
    return (
      <form>
        <FormInput
          type="text"
          name="displayName"
          value={this.state.displayName}
          label="Display name"
          handleChange={this.handleChange}
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={this.state.email}
          label="Email"
          handleChange={this.handleChange}
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={this.state.confirmPassword}
          handleChange={this.handleChange}
          label="Password"
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          handleChange={this.handleChange}
          label="Confirm Password"
        ></FormInput>
        <CustomButton onClick={this.handleClick}>Sign Up</CustomButton>
      </form>
    );
  }
}
