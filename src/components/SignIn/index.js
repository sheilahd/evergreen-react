import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Row, FormGroup, FormControl } from "react-bootstrap";

const SignInPage = () => (
  <div className="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4">Welcome back!</h3>

                <SignInForm />
                <div class="text-center">
                  <PasswordForgetLink />
                </div>
                <div class="text-center">
                  <SignUpLink />
                </div>

                <Link to={ROUTES.LANDING}>
                  <button className="btn btn-sm btn-primary btn-login text-uppercase font-weight-bold mb-2">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="Signin">
        <form
          onSubmit={this.onSubmit}
          style={{
            position: "center",
            width: "50%",
            marginLeft: "20%",
            marginTop: "10%",
          }}
        >
          <FormGroup id="inputEmail">
            <FormControl
              className="form-control"
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="Email Address"
              required
              autofocus
            />
          </FormGroup>

          <FormGroup id="inputPassword">
            <FormControl
              className="form-control"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              required
            />
          </FormGroup>

          <button
            className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2"
            disabled={isInvalid}
            type="submit"
          >
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
