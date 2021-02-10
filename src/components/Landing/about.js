import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";
import parks from "../../assets/img/cards/parks.jpeg";
import fountain from "../../assets/img/cards/fountain.jpg";
import building from "../../assets/img/cards/building.jpg";
import { Link } from "react-router-dom";
import lot1 from "../../docs/Evergreen Lot Map_1987_pg1.pdf";
import lot2 from "../../docs/Evergreen Lot Map_1987_pg2.pdf";
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
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${fountain})` }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text ">
            <div className="text-justify">
              <h2> Public Documents:</h2>
            </div>

            <div className="text-justify">
              <a href={architectural} target="blank">
                Evergreen Application for Architectural Review
              </a>
              <br />
              <br />

              <a href={lot1} target="blank">
                Evergreen Lot Map_1987_pg1.pdf
              </a>
              <br />
              <a href={lot2} target="blank">
                Evergreen Lot Map_1987_pg2.pdf
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
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-6 text-white showcase-img"
            style={{ backgroundImage: `url(${building})` }}
          ></div>
          <div className="col-lg-6  my-auto showcase-text">
            <div className="text-center">
              <h2>Best Place to live</h2>
            </div>
            <p className="lead mb-0">
              "Money Magazine named Cary, North Carolina, the hottest town in
              the East and one of six Hottest Towns in America. Cary was also
              recognized by Money Magazine as one of the Best Small Cities in
              America, ranking an impressive fifth on one of the magazine's
              annual lists of Best Places to Live. As noted in several major
              publications, Cary's accolades are numerous."
            </p>
          </div>
        </div>
        <div className="row no-gutters">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${parks})` }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <div className="text-center">
              <h2>Cary Green Spaces</h2>
            </div>
            <p className="lead mb-0">
              "In 2016, Cary was named the Gold Medal Award winner for
              Excellence in Park and Recreation Management. This award belongs
              to the entire Cary community. The citizens have invested
              incredibly in this Town and continue to do so on a daily basis."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
