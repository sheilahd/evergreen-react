import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";
import parks from "../../assets/img/cards/parks.jpeg";
import fountain from "../../assets/img/cards/fountain.jpg";
import building from "../../assets/img/cards/building.jpg";

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
            <div className="text-center">
              <h2>Cary Downtown</h2>
            </div>
            <p className="lead mb-0">
              "Cary is a thriving community in the heart of the Triangle area of
              North Carolina, between Raleigh and renowned Research Triangle
              Park. The Triangle area is repeatedly ranked among the top regions
              in the country to live or work, to find a home or start a
              business, to raise a family or retire."
            </p>
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
