import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { Row, FormGroup, FormControl } from "react-bootstrap";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div className="Signin">
        <Row>
          <form
            onSubmit={this.onSubmit}
            style={{
              position: "center",
              width: "50%",
              marginLeft: "20%",
              marginTop: "10%",
            }}
          >
            <FormGroup controlId="email">
              <FormControl
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="New Password"
              />
            </FormGroup>
            <FormGroup controlId="email">
              <FormControl
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm New Password"
              />
            </FormGroup>
            <button disabled={isInvalid} type="submit">
              Reset My Password
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </Row>
      </div>
    );
  }
}

export default withFirebase(PasswordChangeForm);
