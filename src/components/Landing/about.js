import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";
import parks from "../../assets/img/cards/parks.jpg";
import fountain from "../../assets/img/cards/fountain.jpg";
import evergreen from "../../assets/img/cards/evergreen.jpg";
import { Link } from "react-router-dom";
import lot1 from "../../docs/Evergreen Lot Map_1987.pdf";

import architectural from "../../docs/Evergreen-Application-for-Architectural-Review - Updated 2020.docx";
import articles from "../../docs/Evergreen-HOA-Articles-of-Incorporation.pdf";
import covenants from "../../docs/Evergreen-HOA-Declaration-of-Protective-Covenants-Conditions-and-Restrictions.pdf";
import lots2to5 from "../../docs/Joint Driveway and Cross Declaration, Lots 2-5.pdf";
import lots44to49 from "../../docs/Joint Driveway and Cross Declaration, Lots 44-49.pdf";
import lots51to56 from "../../docs/Joint Driveway and Cross Declaration, Lots 51-56.pdf";
function About() {
  return (
    <div className="showcase" id="about">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div
            className="col-lg-6 text-white showcase-img"
            style={{ backgroundImage: `url(${evergreen})` }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <div className="row text-center">
              <p className="text-muted my-auto showcase-text text-center mx-auto p-4 ">
                <h4>About Our Community</h4>
                <div className="row text-center">
                  <p
                    className="text-muted my-auto showcase-text text-justify mx-auto p-4  "
                    // style={{ justifyContent: "center" }}
                  >
                    Evergreen is a small community of cozy single-family homes
                    in the heart of Cary, North Carolina. The neighborhood was
                    established in 1987 by New Fortis Homes and is laid out in
                    cul de sacs. The absence of through streets keeps traffic
                    calm and the neighborhood quiet. Home sizes range from
                    1,100-1,500 square feet and include 2-3 bedrooms, vaulted
                    ceilings, and 1.5-2.5 bathrooms. Evergreen homeowners pay
                    annual Homeowners Association dues to the Evergreen HOA and
                    the Parkway Community Association. As of 2021, the Evergreen
                    HOA dues are $145 and the Parkway Community Association dues
                    are $87 per year. These dues are subject to change.
                    Evergreen is situated just north of the SW Cary Parkway and
                    Old Apex Road intersection. The entrance to the neighborhood
                    is from SW Cary Parkway. Location, affordability, and great
                    access to thoroughfares and nearby shopping centers make
                    Evergreen a desirable neighborhood in the Cary area. Please
                    contact the Evergreen HOA Board if you have any questions
                    about the neighborhood.
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          {/* <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${parks})` }}
          ></div> */}
          <div className="col-lg-6  my-auto showcase-text">
            <div className="text-center text-muted mb-4">
              {/* <h3> EVERGREEN HOA </h3> */}
              <h4> Documents & Forms: </h4>
            </div>
            <div className="text-center">
              <a href={architectural} target="blank">
                Evergreen Application for Architectural Review
              </a>
              <br />
              <br />

              <a href={lot1} target="blank">
                Evergreen Lot Map_1987.pdf
              </a>
              <br />

              <a href={articles} target="blank">
                Evergreen HOA Articles of Incorporation.pdf
              </a>
              <br />
              <a href={covenants} target="blank">
                Declaration of Protective Covenants.pdf
              </a>
              <br />
              <a href={lots2to5} target="blank">
                Joint Driveway and Cross Declaration, Lots 2-5.pdf
              </a>
              <br />
              <a href={lots44to49} target="blank">
                Joint Driveway and Cross Declaration, Lots 44-49.pdf
              </a>
              <br />
              <a href={lots51to56} target="blank">
                Joint Driveway and Cross Declaration, Lots 51-56.pdf
              </a>
              <br />
            </div>
          </div>
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${fountain})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default About;
