import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoArrowRedo } from "react-icons/io5";
import aboutImg from "../../Assests/img/about-img.webp";
import LogoGroup from "../Common/LogoGroup/LogoGroup";
import mission from "../../Assests/img/mission.webp";
import vision from "../../Assests/img/vision.webp";
import values from "../../Assests/img/values.webp";
import aboutLogo from "../../Assests/img/about-logo.webp";
import NumberCounter from "../Common/NumberCounter/NumberCounter";
import Testimonial from "../Common/Testimonial/Testimonial";
import ScheduleCall from "../../Assests/img/schedulelogo.webp";
import WorkplaceWellness from "../../Comp/Common/WorkplaceWellness/WorkplaceWellness";
import ContactForm from "../../Comp/Common/ContactForm/ContactForm";
import BeyondTheBasic from "../../Assests/img/BeyondTheBasics.webp";
import HealtyEmployess from "../../Assests/img/HealthyEmployees.webp";
import LeapForward from "../../Assests/img/LeapForward.webp";
import TopBanner from "../../Comp/Common/TopBanner/TopBanner";
import { Helmet } from "react-helmet";
import { team } from "../../Data";
import "./About.css";
const About = () => {
  const data = {
    name: "about",
  };

  return (
    <>
      <Helmet>
        <title>About LifeUP Corporate Wellness LLC</title>
        <meta
          name="description"
          content="LifeUP Corporate Wellness LLC is dedicated to enhancing employee health and wellbeing through thoughtful & customized corporate health programs."
        />
      </Helmet>
      <section className="for-top-spacing" id="about-page">
        {/* about banner start */}
        <TopBanner {...data} />
        {/* about banner end */}
        {/* ----------------- */}
        {/* about start */}
        <section id="about-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={aboutImg} alt="aboutImg" loading="lazy"></img>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 about-inner-text">
                <h4 class="h4-head main-head">
                  LifeUP:<br></br>A Radical New Approach To Corporate Health,
                  Wellness, And Thriving Workplace Culture.
                </h4>
                <span>
                  <p class="text-desc">
                    Culture is the “tacit social order of an organization” –
                    unspoken but definitely felt. It shapes words, attitudes,
                    and deeds in profound and enduring ways.
                  </p>
                  <a href="https://calendly.com/lifeup-health" target="_blank">
                    <button className="btn yellow-btn" type="submit">
                      schedule a call
                      <span className="home-icon">
                        <GoArrowUpRight />
                      </span>
                    </button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* about end */}
        {/* ----------------- */}
        {/* ------------------------------ */}
        {/* logo-grp start */}
        <section id="logo-grp">
          <LogoGroup />
        </section>
        {/* logo-grp end */}
        {/* ------------------------------ */}
        {/* mission-vision start */}

        <section id="mission">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src={mission} alt="mission" loading="lazy"></img>
              </div>
              <div className="col-md-7 mission-text">
                <h4 class="h4-head main-head">Mission</h4>
                <p class="text-desc">
                  LifeUP designs and delivers wellness programs that teach
                  companies and employees how to be healthy for life.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="mission">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src={vision} alt="vision" loading="lazy"></img>
              </div>
              <div className="col-md-7 mission-text">
                <h4 class="h4-head main-head">Vision</h4>
                <p class="text-desc">
                  Create a world where healthy habits are accessible for
                  everyone who desires to look, feel, and perform their very
                  best.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="mission">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src={values} alt="values" loading="lazy"></img>
              </div>
              <div className="col-md-7 mission-text">
                <h4 class="h4-head main-head">Values</h4>
                <span className="values-list">
                  <p class="text-desc">Have a GROWTH mindset.</p>
                  <p class="text-desc">Find BALANCE.</p>
                  <p class="text-desc">Experience FUN.</p>
                  <p class="text-desc">Deliver FULFILLMENT.</p>
                  <p class="text-desc">BE the change.</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* mission-vision end */}
        {/* ------------------------------ */}
        {/* Promises start */}
        <section id="Promises">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={aboutLogo} alt="aboutLogo" loading="lazy"></img>
              </div>
              <div className="col-md-8">
                <h4 class="h4-head main-head">Promises</h4>
                <ul>
                  <li>
                    <span>
                      <IoArrowRedo />
                    </span>
                    <p className="text-desc">
                      Develop exercise practices that fit and work in YOUR
                      lifestyle.
                    </p>
                  </li>
                  <li className="promise-list">
                    <span>
                      <IoArrowRedo />
                    </span>
                    <p className="text-desc">
                      Empowering individuals to recognize, plan, and make
                      'Thumbs Up' nutritional choices under any circumstance.
                    </p>
                  </li>
                  <li className="promise-list">
                    <span>
                      <IoArrowRedo />
                    </span>
                    <p className="text-desc">
                      Discover and implement healthy habits that benefit you FOR
                      life.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Promises end */}
        {/* --------------------------- */}
        {/* number-counter start */}
        <section id="number-counter">
          <NumberCounter />
        </section>
        {/* number-counter end */}
        {/* ------------------------------ */}
        {/* testimonial start */}
        <section id="testimonial">
          <div className="container">
            <div className="row">
              <h4 class="h4-head main-head">Testimonials</h4>
              <Testimonial />
            </div>
          </div>
        </section>
        {/* testimonial end */}
        {/* --------------------------- */}
        {/* Team start */}
        <section id="team">
          <div className="container">
            <h4 class="h4-head main-head">Meet The Team</h4>
            <div className="row team-row">
              {team.map((data, id) => (
                <div
                  className="col-md-12 col-lg-4 col-xs-12 col-sm-12 team-box "
                  key={id}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <img
                          src={data.img}
                          alt="dereekOpperman"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7">
                        <div className="team-desc">
                          <h4>{data.name}</h4>
                          <h6>{data.designation}</h6>
                          <p className="text-desc">{data.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Team end */}
        {/* --------------------------- */}
        {/* schedule a call start */}
        <section id="scheduleCall">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <img src={ScheduleCall} alt="ScheduleCall" loading="lazy"></img>
              </div>
              <div className="col-md-8 col-lg-6">
                <h4 class="h4-head main-head">
                  LifeUP Corporate Health & Wellness Looks Forward To Partnering
                  With You.
                </h4>
              </div>
              <div className="col-md-12 col-lg-3">
                <a href="https://calendly.com/lifeup-health" target="_blank">
                  <button className="btn yellow-btn black-btn" type="submit">
                    schedule a call
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* schedule a call end */}
        {/* --------------------------- */}
        {/* WorkplaceWellness start */}
        <section id="WorkplaceWellnessTop">
          <WorkplaceWellness />
        </section>
        {/* WorkplaceWellness end */}
        {/* --------------------------- */}
        {/* ContactForm start */}
        <ContactForm />
        {/* ContactForm end */}
        {/* --------------------------------- */}
        {/* blog start */}
        <section id="common-blogs">
          <div className="container">
            <h4 class="h4-head main-head">
              Latest Corporate<br></br> Wellness News
            </h4>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xs-12 col-sm-12 blog-box">
                <a
                  href="https://lifeupcorporatewellness.com/blog/beyond-the-basics-unleashing-wellness-innovation-in-the-workplace/"
                  target="_blank"
                >
                  <div className="blogs-inner">
                    <img
                      src={BeyondTheBasic}
                      alt="BeyondTheBasic"
                      loading="lazy"
                    ></img>
                    <div className="blog-desc">
                      <h3>March 22, 2024</h3>
                      <h4 class="h4-head main-head">
                        Beyond the Basics: Unleashing Wellness Innovation in the
                        Workplace
                      </h4>
                      <p className="text-desc">
                        I don’t know about you, but the idea of transforming
                        workplace culture has always fascinated me. As a
                        certified holistic health coach...
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12 col-sm-12 blog-box">
                <a
                  href="https://lifeupcorporatewellness.com/blog/healthy-employees-thriving-business-unlocking-the-potential-of-wellness/"
                  target="_blank"
                >
                  <div className="blogs-inner">
                    <img
                      src={HealtyEmployess}
                      alt="HealtyEmployess"
                      loading="lazy"
                    ></img>
                    <div className="blog-desc">
                      <h3>March 22, 2024</h3>
                      <h4 class="h4-head main-head">
                        Healthy Employees, Thriving Business: Unlocking
                      </h4>
                      <p className="text-desc">
                        As a certified holistic health coach in the vibrant city
                        of Los Angeles, I’ve witnessed the transformative power
                        of stepping beyond traditional wellness programs to
                        cultivate a thriving...
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 col-xs-12 col-sm-12 blog-box">
                <a
                  href="https://lifeupcorporatewellness.com/blog/australia-s-right-to-disconnect-a-leap-forward-in-employee-well-being/"
                  target="_blank"
                >
                  <div className="blogs-inner">
                    <img
                      src={LeapForward}
                      alt="LeapForward"
                      loading="lazy"
                    ></img>
                    <div className="blog-desc">
                      <h3>March 21, 2024</h3>
                      <h4 class="h4-head main-head">
                        As a corporate health and wellness coach,
                      </h4>
                      <p className="text-desc">
                        I’ve long advocated for the importance of work-life
                        balance in fostering employee well-being and preventing
                        burnout. That’s why I’m thrilled to see Australia taking
                        a significant step forward...{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* blog end */}
      </section>
    </>
  );
};

export default About;
