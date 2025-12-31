import React from "react";
import "./CommonServices.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const CommonServices = () => {
  return (
    <div className="services">
      <div className="container">
        <h4 className="h4-head main-head"> services</h4>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="out-border">
              <div className="services-box">
                <div>
                  <h4 class="h4-head">Learning</h4>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Lunch and Learns, Open Mics</p>
                  </a>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Wellness Classes</p>
                  </a>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Content Creation</p>
                  </a>
                  <a className="navbar-top-link navbar-top-link-top">
                    <IoIosArrowForward />
                    <p>Internal Stretching/Ergonomics Videos</p>
                  </a>
                </div>
                <div id="hover-btn">
                  <Link to="/learning" class="button">
                    <span class="icon">
                      <span className="hover-icon">
                        <MdArrowOutward />
                      </span>
                    </span>
                    <span class="text">Full Service</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="out-border">
              <div className="services-box">
                <div>
                  <h4 class="h4-head">Conferences</h4>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Keynote</p>
                  </a>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Digital Scavenger Hunts</p>
                  </a>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Wellness Classes</p>
                  </a>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Menu Design</p>
                  </a>
                </div>
                <div id="hover-btn">
                  <Link
                    to="/conferences"
                    class="button"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <span class="icon">
                      <span className="hover-icon">
                        <MdArrowOutward />
                      </span>
                    </span>
                    <span class="text">Full Service</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="out-border">
              <div className="services-box">
                <div>
                  <h4 class="h4-head">Extended</h4>
                  <a className="navbar-top-link">
                    <IoIosArrowForward />
                    <p>Healthy Habit Challenge</p>
                  </a>
                  <a className="navbar-top-link navbar-top-link-top">
                    <IoIosArrowForward />
                    <p>Healthy Habits for the Busy Business Program</p>
                  </a>
                </div>
                <div id="hover-btn">
                  <Link to="/extended" class="button">
                    <span class="icon">
                      <span className="hover-icon">
                        <MdArrowOutward />
                      </span>
                    </span>
                    <span class="text">Full Service</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonServices;
