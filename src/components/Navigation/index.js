import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import Nav from "react-bootstrap/Nav";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    id="mainNav"
  >
    <div className="container">
      <Nav.Item
        as="li"
        className="navbar-brand js-scroll-trigger"
        href="#page-top"
      >
        <Link to={ROUTES.HOME}>
          <div className="navbar-brand js-scroll-trigger" href="#page-top">
            <h6>Evergreen HOA</h6>
          </div>
        </Link>
      </Nav.Item>

      <button
        className="navbar-toggler navbar-toggler-left"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fa fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              Documents
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#newsletters">
              Newsletters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Schools
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
              >
              <a
                class="dropdown-item"
                href="https://www.townofcary.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Town of Cary
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.greatschools.org/north-carolina/cary/7674-Laurel-Park-Elementary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elementary School
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.greatschools.org/north-carolina/apex/3367-Salem-Middle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Middle School
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.wcpss.net/apexhs"
                target="_blank"
                rel="noopener noreferrer"
              >
                High School
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#">
              Payments
            </a>
          </li>
          <Nav.Item as="li" className="nav-link js-scroll-trigger">
            <SignOutButton />
          </Nav.Item>
        </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    id="mainNav"
  >
    <div className="container">
      <Nav.Item
        as="li"
        className="navbar-brand js-scroll-trigger"
        href="#page-top"
      >
        <Link to={ROUTES.LANDING}>
          <div className="navbar-brand js-scroll-trigger" href="#page-top">
            <h6>Evergreen HOA</h6>
          </div>
        </Link>
      </Nav.Item>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              Documents
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >
              Town of Cary
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
              >
              
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.townofcary.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Town of Cary 
              </a>
              </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">
              Board
            </a>
          </li> */}
          
          <li className="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Schools
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.greatschools.org/north-carolina/cary/7674-Laurel-Park-Elementary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elementary School
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.greatschools.org/north-carolina/apex/3367-Salem-Middle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Middle School
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="https://www.wcpss.net/apexhs"
                target="_blank"
                rel="noopener noreferrer"
              >
                High School
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#">
              Payments
            </a>
          </li>
        
          <Nav.Item as="li" className="nav-link js-scroll-trigger">
            <Link to={ROUTES.SIGN_IN} className="btn btn-primary btn-md">
              Sign In
            </Link>
          </Nav.Item>
       </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
