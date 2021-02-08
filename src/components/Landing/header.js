import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            {/* <h4 className="section-subheading intro-lead-in">
              Evergreen Community
            </h4> */}
            {/* <h4 className="section-subheading intro-lead-in">Welcome!</h4> */}

            {/* <button
              onClick={() => history.push("/signup")}
              className="btn btn-primary btn-lg text-uppercase"
            >
              {" "}
              Register
            </button> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
