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
  // const addinsCardsLinks = [
  //   {
  //     title: "Addin Form",
  //     caption: "Help Construction drawings and specifications",
  //     picture: blueprint,
  //   },
  //   {
  //     title: "Roof type selector",
  //     caption: "Use the wall type selector to specify the type of roof",
  //     picture: roof,
  //   },
  //   {
  //     title: "Building dimensions",
  //     caption: "Building horizontal dimensions are from outer edge of wall",
  //     picture: walls,
  //   },
  //   {
  //     title: "Slab",
  //     caption: "Use the slab checkbox to create the default floor (slab)",
  //     picture: floor1,
  //   },
  //   {
  //     title: "Wall type selector",
  //     caption: "Use the wall type selector to specify the type of wall",
  //     picture: bricks,
  //   },
  //   {
  //     title: "Project base point (PBP)",
  //     caption:
  //       "Use the axes XYZ of PBP to locate the building in the Revit world",
  //     picture: xyz,
  //   },
  // ];

  return (
    <div>
      <Header />
      <Services />
      {/* <AddinsCardsLinks addinsCardsLinks={addinsCardsLinks}></AddinsCardsLinks> */}
      <About />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Landing;
