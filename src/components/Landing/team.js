import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import team1 from "../../assets/img/cards/testimonials-1.jpg";
import team2 from "../../assets/img/cards/testimonials-2.jpg";
import team3 from "../../assets/img/cards/testimonials-3.jpg";

function Team() {
  return (
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">Our Board</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src={team1}
                alt=""
              />
              <h5>Margaret E.</h5>
              <p className="font-weight-light mb-0">
                "Resident since 1989, Board Manager"
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src={team2}
                alt=""
              />
              <h5>Fred S.</h5>
              <p className="font-weight-light mb-0">
                "Resident since 2010, Board Assistant"
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-circle mb-3"
                src={team3}
                alt=""
              />
              <h5>Sarah W.</h5>
              <p className="font-weight-light mb-0">
                "Resident since 2017, Accountant"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
