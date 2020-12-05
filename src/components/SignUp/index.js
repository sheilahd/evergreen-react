import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import { Row, FormGroup, FormControl } from "react-bootstrap";

const SignUpPage = () => (
  <div
    style={{
      position: "center",
      width: "50%",
      marginLeft: "20%",
      marginTop: "10%",
    }}
  >
    <h2 className="text-center">Please Sign Up</h2>
    <SignUpForm />
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
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="Signup">
        <Row>
          <form
            onSubmit={this.onSubmit}
            style={{ width: "50%", marginLeft: "20%", marginTop: "10%" }}
          >
            <FormGroup controlId="username">
              <FormControl
                type="text"
                value={username}
                name="username"
                placeholder="Full Name"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormControl
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup controlId="password">
              <FormControl
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup controlId="password2">
              <FormControl
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
              />
            </FormGroup>
            <label>
              Admin:
              <input
                name="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={this.onChangeCheckbox}
              />
            </label>

            <br />
            <button
              className="btn btn-primary btn-md"
              disabled={isInvalid}
              type="submit"
            >
              Sign Up
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </Row>
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
