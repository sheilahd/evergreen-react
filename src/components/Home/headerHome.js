import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withFirebase } from "../Firebase";

function HeaderHome({ firebase }) {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        firebase.db.ref("/users/" + user.uid).on("value", (snapshot) => {
          const dbUser = snapshot.val();
          setCurrentUser({ ...user, ...dbUser });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  console.log(currentUser);

  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
              Welcome Back {currentUser && currentUser.username.toUpperCase()}!
            </div>

            <button
              onClick={() => history.push("/addinsdashboard")}
              className="btn btn-primary btn-xl text-uppercase"
            >
              {" "}
              Add a new Add-in Request
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default withFirebase(HeaderHome);
