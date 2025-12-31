import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../Assests/img/logo.webp";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-top">
        <div className="container alltopcontactalllinks">
          <div className="topcontactalllinks">
            <a href="tel:+3106833374" className="navbar-top-link">
              <BiSolidPhoneCall />
              <p>(310) 683-3374</p>
            </a>
            <a
              href="mailto:hello@lifeupcorporatewellness.com"
              target="_blank"
              className="navbar-top-link"
            >
              <MdEmail />
              <p>hello@lifeupcorporatewellness.com</p>
            </a>
            <a
              href="https://maps.app.goo.gl/uKqtJbxuB6MV2jpR7"
              target="_blank"
              className="navbar-top-link"
            >
              <FaMapMarkerAlt />
              <p> Los Angeles, CA </p>
            </a>
          </div>
          <div className="topcontactsociallinks">
            <a
              href=" https://www.facebook.com/profile.php?id=61556157465947"
              target="_blank"
              className="navbar-top-link"
            >
              <TfiFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/lifeup-corporate-wellness-llc/"
              target="_blank"
              className="navbar-top-link"
            >
              <TfiLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOQvsfoRHbXMRmzNfxreLMg"
              target="_blank"
              className="navbar-top-link"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.instagram.com/_life_up_/"
              target="_blank"
              className="navbar-top-link"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container navbar-inner">
            <div className="navbar-logo">
              <a class="navbar-brand" href="/">
                <img src={logo} alt="logo" loading="lazy"></img>
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="active" rel="noopener noreferrer">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" rel="noopener noreferrer">
                    about
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    to="/services"
                    class="nav-link"
                    rel="noopener noreferrer"
                  >
                    services
                  </Link>
                  <ul class="dropdown-content">
                    <li>
                      <Link
                        to="/learning"
                        rel="noopener noreferrer"
                        class="dropdown-item"
                      >
                        Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/conferences"
                        rel="noopener noreferrer"
                        class="dropdown-item"
                      >
                        Conferences
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/extended"
                        rel="noopener noreferrer"
                        class="dropdown-item"
                      >
                        extended
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/speaker" rel="noopener noreferrer">
                    Speaker
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://lifeupcorporatewellness.com/blog"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/contact" rel="noopener noreferrer">
                    Contact
                  </Link>
                </li>
              </ul>
              <a href="https://calendly.com/lifeup-health" target="_blank">
                <button className="btn yellow-btn" type="submit">
                  schedule a call
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
