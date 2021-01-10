import { React } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">
            We will respond to your request soon
          </h3>
        </div>
        <form
          onSubmit={sendEmail}
          id="contactForm"
          name="sentMessage"
          novalidate="novalidate"
        >
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name *"
                  name="name"
                  required="required"
                  data-validation-required-message="Please enter your name."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address *"
                  name="email"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <input
                  id="phone"
                  type="phone"
                  className="form-control"
                  placeholder="Your Phone (optional)"
                  name="phone"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <input
                  id="address"
                  type="address"
                  className="form-control"
                  placeholder="Your Address *"
                  name="address"
                  required="required"
                  data-validation-required-message="Please enter your address."
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-md-0">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject *"
                  name="subject"
                />
                <p className="help-block text-danger"></p>
              </div>

              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your message *"
                  name="message"
                  required="required"
                  data-validation-required-message="Please enter a message."
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div id="success"></div>
            <button
              id="sendMessageButton"
              type="submit"
              className="btn btn-primary btn-xl text-uppercase"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
