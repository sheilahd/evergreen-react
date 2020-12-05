import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Row, FormGroup, FormControl } from "react-bootstrap";

const PasswordForgetPage = () => (
  <div style={{ width: "50%", marginLeft: "20%", marginTop: "10%" }}>
    <h3 className="text-center"> Reset your Password</h3>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div className="Signin">
        <Row>
          <form
            onSubmit={this.onSubmit}
            style={{ width: "50%", marginLeft: "20%", marginTop: "10%" }}
          >
            <FormGroup controlId="email">
              <FormControl
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </FormGroup>
            <button
              disabled={isInvalid}
              type="submit"
              className="btn btn-primary btn-md"
            >
              Reset My Password
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </Row>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
