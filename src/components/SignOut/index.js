import React from "react";
import { useHistory } from "react-router-dom";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => {
  const history = useHistory();
  return (
    <button
      className="btn btn-primary btn-md"
      type="button"
      onClick={() => {
        firebase.doSignOut().then(() => {
          history.push("/");
        });
      }}
    >
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);
