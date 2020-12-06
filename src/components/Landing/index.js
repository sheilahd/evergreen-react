import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Services from "./services";
// import AddinsCardsLinks from "./cards";
import About from "./about";
import Team from "./team";
import ContactUs from "./contactUs";
import Footer from "./footer";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";

function Landing() {
  return (
    <div>
      <Header />
      <Services />

      <About />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Landing;
