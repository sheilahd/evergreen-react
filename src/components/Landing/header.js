import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            {/* <div className="intro-lead-in">Evergreen HOA</div> */}

            {/* <h4 className="section-subheading intro-lead-in">Evergreen HOA</h4> */}

            <button
              onClick={() => history.push("/signin")}
              className="btn btn-primary btn-xl text-uppercase"
            >
              {" "}
              Register as a New Neighbor
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
