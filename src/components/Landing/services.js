import React from "react";
import { useHistory } from "react-router-dom";

function Services() {
  const history = useHistory();
  return (
    <section class="features-icons bg-light text-center">
      <div className="page-section" id="services">
        <div className="container">
          <div className="col-lg-12 text-center mb-4"></div>
          <div className="row">
            <div className="col-lg-12 text-center">
              {/* <h2 className="section-heading text-uppercase">
                Evergreen Community Welcome!{" "}
              </h2> */}
              <button
                onClick={() => history.push("/signup")}
                className="btn btn-primary btn-lg text-uppercase"
              >
                {" "}
                Register
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
