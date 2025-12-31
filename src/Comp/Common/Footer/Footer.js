import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../Assests/img/footer-logo.webp";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiCopyrightBold } from "react-icons/pi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <div className="footerborder-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={footerLogo} alt="footerLogo" loading="lazy"></img>{" "}
                  </Link>
                  <p>
                    LifeUP Corporate Wellness designs corporate wellness
                    programs that create the ‘a-ha!’ moments that transform
                    ordinary lives into extraordinary lifestyles
                  </p>
                  <div className="footer-social-icon">
                    <i>
                      <a
                        href="https://www.facebook.com/profile.php?id=61556157465947"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </i>
                    <i>
                      <a
                        href="https://www.linkedin.com/company/lifeup-corporate-wellness-llc/"
                        target="_blank"
                      >
                        <ImLinkedin2 />
                      </a>
                    </i>
                    <i>
                      <a
                        href="https://www.youtube.com/channel/UCOQvsfoRHbXMRmzNfxreLMg"
                        target="_blank"
                      >
                        <GrYoutube />
                      </a>
                    </i>
                    <i>
                      <a
                        href="https://www.instagram.com/_life_up_/"
                        target="_blank"
                      >
                        <PiInstagramLogoFill />
                      </a>
                    </i>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                <div className="footer-list">
                  <h3>useful links</h3>
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li>
                      <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                      <Link to="/services">SERVICES</Link>
                    </li>
                    <li>
                      <Link to="/speaker">SPEAKER</Link>
                    </li>
                    <li>
                      <a href="https://lifeupcorporatewellness.com/blog">
                        BLOG
                      </a>
                    </li>
                    <li>
                      <Link to="/contact">CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="office-list footer-list">
                  <h3>office</h3>
                  <ul>
                    <li>
                      {" "}
                      <a href="tel:+3106833374" className="navbar-top-link">
                        <BiSolidPhoneCall />
                        <p>(310) 683-3374</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:hello@lifeupcorporatewellness.com"
                        target="_blank"
                        className="navbar-top-link"
                      >
                        <HiMail />
                        <p>hello@lifeupcorporatewellness.com</p>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://maps.app.goo.gl/uKqtJbxuB6MV2jpR7"
                        target="_blank"
                        className="navbar-top-link"
                      >
                        <FaMapMarkerAlt />
                        <p>Los Angeles, CA </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div className="footer-list footer-map">
                  <div class="responsive-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0442308581!2d-118.74140107455267!3d34.020608442949346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1714796863956!5m2!1sen!2sin"
                      allowfullscreen
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          {" "}
          copyright <PiCopyrightBold /> all right reserved |
          <Link to="/privacy" rel="noopener">
            &nbsp;&nbsp;&nbsp;Privacy Policy &nbsp;&nbsp;&nbsp;
          </Link>
          |
        </div>
      </section>
    </footer>
  );
};

export default Footer;
