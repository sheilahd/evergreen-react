import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
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

  // const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            {/* <h4 className=" section-subheading intro-lead-in">
              Welcome Back {currentUser && currentUser.username.toUpperCase()}!
            </h4> */}

            {/* <button
              onClick={() => history.push("/addinsdashboard")}
              className="btn btn-primary btn-xl text-uppercase"
            >
              {" "}
              Click for HOA Approval documents
            </button> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default withFirebase(HeaderHome);
