import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import { Row, FormGroup, FormControl } from "react-bootstrap";

const SignUpPage = () => (
  <div className="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3 class="login-heading mb-4 ">Register!</h3>

                <SignUpForm />

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
  username: "",
  email: "",

  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
        });
      })
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

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,

      passwordOne,
      passwordTwo,

      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="Signup">
        <form
          onSubmit={this.onSubmit}
          style={{
            position: "center",
            width: "50%",
            marginLeft: "20%",
            marginTop: "10%",
          }}
        >
          <FormGroup controlId="username">
            <FormControl
              className="form-control"
              type="text"
              value={username}
              name="username"
              placeholder="Full Name"
              onChange={this.onChange}
            />
          </FormGroup>

          <FormGroup id="email">
            <FormControl
              className="form-control"
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              required
            />
          </FormGroup>

          <FormGroup id="inputPassword">
            <FormControl
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              required
            />
          </FormGroup>

          <FormGroup id="inputPassword">
            <FormControl
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </FormGroup>

          {/* 
          <label>
            Admin:
            <input
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
            />
          </label> */}

          <button
            className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2"
            disabled={isInvalid}
            type="submit"
          >
            Sign Up
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
