import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your eamil and password</span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
