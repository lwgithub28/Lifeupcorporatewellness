import React from "react";
import { Link } from "react-router-dom";
import "./InnerServices.css";
import { GoArrowUpRight } from "react-icons/go";
import TopBanner from "../Common/TopBanner/TopBanner";
import ScheduleCall from "../../Assests/img/schedulelogo.webp";
import LunchLearn from "../../Assests/img/lunchlearn.webp";
import checkArrow from "../../Assests/img/checkarrow.webp";
import HealthyHabitChallenge from "../../Assests/img/HealthyHabitChallenge.webp";
import HealthyHabits from "../../Assests/img/HealthyHabits.webp";
import InternalStretching from "../../Assests/img/internalstretching.webp";
import ContactForm from "../Common/ContactForm/ContactForm";
import Faq from "../Common/Faq/Faq";
const Extended = () => {
  const data = {
    name: "Extended",
  };
  return (
    <>
      <section className="for-top-spacing Inner-page" id="extended-page">
        {/* Speaker banner start */}
        <TopBanner {...data} />
        {/* Speaker banner end */}
        {/* ------------------------- */}
        {/* Lunch and Learns start */}
        <section id="LunchLearn" className="LearningSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 LearningSectionText">
                <h4 className="h4-head main-head">Healthy Habit Challenge</h4>
                <p className="text-desc">4-6 week wellness 'sprints'.</p>
                <ul>
                  <li>
                    <span className="navbar-top-link chngFont">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Covers an array of wellness topics.</h6>
                    </span>
                  </li>
                  <li>
                    <span
                      target="_blank"
                      className="navbar-top-link chng-align"
                    >
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        Challenges conducted through our private app- just for
                        your employees.
                      </h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Multiple weekly live classes.</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Weekly healthy habit newsletter.</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        Small group or private health coaching calls for
                        participants.
                      </h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        High-energy kickoff and closing acknowledgement events.
                      </h6>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img
                  src={HealthyHabitChallenge}
                  alt="HealthyHabitChallenge"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* Lunch and Learns end */}
        {/* ------------------------- */}
        {/* Internal Stretching start */}
        <section id="InternalStretching" className="LearningSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 LearningSectionText">
                <h4 className="h4-head main-head">
                  Healthy Habits for the Busy Business Program
                </h4>
                <p className="text-desc">
                  A 12-month transformational corporate wellness program best
                  for companies ready to optimize the well-being of their
                  organization.
                </p>
                <ul>
                  <li>
                    <span className="navbar-top-link chngFont">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        Eight foundational pillar workshops (conducted monthly).
                      </h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        Access to online coaching program (pillar workshop
                        recordings, blog posts, continuing education content).
                      </h6>
                    </span>
                  </li>
                  <li>
                    <span
                      target="_blank"
                      className="navbar-top-link chng-align"
                    >
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        Monthly 'Challenge' to put workshop distinctions out in
                        the world and practiced.
                      </h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        Private health coaching calls for each
                        employee/participant.
                      </h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Live weekly classes (which will be recorded).</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Private online community.</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>
                        High-energy kickoff and closing acknowledgement events.
                      </h6>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img
                  src={HealthyHabits}
                  alt="HealthyHabits"
                  loading="lazy"
                ></img>
              </div>
            </div>
            <p className="text-desc">
              *Prices assume digital or Los Angeles city-based facilitation;
              additional travel costs may be incurred for services rendered.
            </p>
          </div>
        </section>
        {/* Internal Stretching end */}
        {/* ------------------------- */}
        {/* ----------------------------- */}
        {/* ---------------------------- */}
        {/* schedule a call start */}
        <section id="scheduleCall">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <img src={ScheduleCall} alt="ScheduleCall" loading="lazy"></img>
              </div>
              <div className="col-md-8 col-lg-6">
                <h4 class="h4-head main-head">
                  If you have any questions or inquiries about our Corporate
                  Wellness Programs, Please reach out so we can begin to
                  discover what an impactful program for your team could look
                  like.
                </h4>
              </div>
              <div className="col-md-12 col-lg-3 contactNowBtn ">
                <Link to="/contact">
                  <button className="btn yellow-btn black-btn" type="submit">
                    contact now
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* schedule a call end */}
        {/* ------------------------ */}
        {/* contact form start */}
        <ContactForm />
        {/* contact form end */}
        {/* --------------------------- */}
        {/* FAQ start */}
        <section>
          <Faq />
        </section>
        {/* FAQ end */}
      </section>
    </>
  );
};

export default Extended;
