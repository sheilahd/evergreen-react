import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import feb2019 from "../../docs/newsletters/2.2019 Evergreen HOA Newsletter.pdf";
import apr2019 from "../../docs/newsletters/4.2019 Evergreen HOA Newsletter.pdf";
import aug2019 from "../../docs/newsletters/8.2019 Evergreen HOA Newsletter.pdf";
import sep2018 from "../../docs/newsletters/9.2018 Evergreen HOA Newsletter.pdf";
import oct2019 from "../../docs/newsletters/10.2019 Evergreen HOA Newsletter.pdf";
import nov2018 from "../../docs/newsletters/11.2018 Evergreen HOA Newsletter.pdf";
import dec2019 from "../../docs/newsletters/12.2019 Evergreen HOA Newsletter.pdf";
import spr2020 from "../../docs/newsletters/Spring 2020 Newsletter_v2.pdf";
import sept2021 from "../../docs/newsletters/09.2021 Evergreen HOA Newsletter.pdf";

function Newsletters() {
  return (
    <section className="testimonials text-center bg-light" id="newsletters">
      <div className="container">
        <h2 className="mb-5">Our Newsletters by Year:</h2>
        <div className="row">
          <div className="col-lg-3">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <h5>2018</h5>
              <a href={sep2018} target="blank">
                September 2018 Newsletter
              </a>
              <br />
              <a href={nov2018} target="blank">
                November 2018 Newsletter
              </a>
              <br />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <h5>2019</h5>
              <a href={feb2019} target="blank">
                February 2019 Newsletter
              </a>
              <br />
              <a href={apr2019} target="blank">
                April 2019 Newsletter
              </a>
              <br />
              <a href={aug2019} target="blank">
                August 2019 Newsletter
              </a>
              <br />
              <a href={oct2019} target="blank">
                October 2019 Newsletter
              </a>
              <br />
              <a href={dec2019} target="blank">
                December 2019 Newsletter
              </a>
              <br />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <h5>2020</h5>
              <a href={spr2020} target="blank">
                April 2020 Newsletter
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <h5>2021</h5>
              <a href={sept2021} target="blank">
                September 2021 Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Newsletters;
