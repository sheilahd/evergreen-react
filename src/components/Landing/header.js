import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead" id="page-top">
        <div className="container">
          <div className="intro-text">
            {
              <h4 className="section-subheading intro-lead-in big-intro">
                Evergreen HOA
              </h4>
            }
            {
              <h6 className="section-subheading intro-lead-in big-intro">
                Cary, North Carolina
              </h6>
            }

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
