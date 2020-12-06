import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";
import kid from "../../assets/img/cards/bg-showcase-3.jpg";
import christmas from "../../assets/img/cards/christmas.jpg";
import covid from "../../assets/img/cards/covid.jpeg";

function About() {
  return (
    <div className="showcase" id="about">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${christmas})` }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text ">
            <h2>Christmas Decorating Contest</h2>
            <p className="lead mb-0">
              Merry Christmas to you!! Participating homes will be photographed
              for our Website, then voted on by residents. Voting information
              will be updated soon.
            </p>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-6 text-white showcase-img"
            style={{ backgroundImage: `url(${covid})` }}
          ></div>
          <div className="col-lg-6  my-auto showcase-text">
            <h2>Help prevent the spread of COVID-19</h2>
            <p className="lead mb-0">
              Wear a mask.Save lives. Wear a face cover Wash your hands Keep a
              safe distance Let us know if you need Help!!!
            </p>
          </div>
        </div>
        <div className="row no-gutters">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${kid})` }}
          ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>A Parent's Guide to Conscious Discipline</h2>
            <p className="lead mb-0">
              A positive parenting expert explains Conscious Discipline, a new
              parenting trend, and philosophy that is having a tremendous impact
              on both kids and adults.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
