import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";

import HeaderHome from "./headerHome";
import About from "../Landing/about";
import Services from "../Landing/services";
import Team from "../Landing/team";
import ContactUs from "../Landing/contactUs";
import Footer from "../Landing/footer";

import "../../assets/css/bootstrap.min.css";

function HomePage() {
  return (
    <div>
      <HeaderHome />
      <Services />

      <About />
      <Team />
      <ContactUs />
      {/* <UploadImages /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
