import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withFirebase } from "../Firebase";

function ServiceHome({ firebase }) {
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

  const history = useHistory();
  return (
    <React.Fragment>
      <section className="testimonials text-center bg-light" id="newsletters">
        <div className="masthead">
          <div className="container">
            <div className="intro-text">
              <h2 className=" section-subheading intro-lead-in ">
                Welcome Back {currentUser && currentUser.username.toUpperCase()}
                !
              </h2>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default withFirebase(ServiceHome);
