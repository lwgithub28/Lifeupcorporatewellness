import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import VideoImg from "../../Assests/img/video-img.webp";
import footerLogo from "../../Assests/img/footer-logo.webp";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import YellowLine from "../../Assests/img/yellowline.webp";
import WhiteLine from "../../Assests/img/whiteline.webp";
import Darek from "../../Assests/img/derek.webp";
import knowledgeQuest from "../../Assests/img/knowledgequest.webp";
import Solution1 from "../../Assests/img/solution1.webp";
import Solution2 from "../../Assests/img/solution2.webp";
import BeyondTheBasic from "../../Assests/img/BeyondTheBasics.webp";
import HealtyEmployess from "../../Assests/img/HealthyEmployees.webp";
import LeapForward from "../../Assests/img/LeapForward.webp";
import Testimonial from "../../Comp/Common/Testimonial/Testimonial";
import WorkplaceWellness from "../Common/WorkplaceWellness/WorkplaceWellness";
import ContactForm from "../Common/ContactForm/ContactForm";
import VideoTestimonial from "../Common/VideoTestimonial/VideoTestimonial";
import LogoGroup from "../Common/LogoGroup/LogoGroup";
import NumberCounter from "../Common/NumberCounter/NumberCounter";
import Faq from "../../Comp/Common/Faq/Faq";
import CommonServices from "../Common/CommonServices/CommonServices";
import { Helmet } from "react-helmet";
import "./Home.css";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const openModal = (id) => {
    setVideoId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoId("");
  };
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Corporate Health Coach Los Angeles - LifeUP Corporate Wellness
        </title>
        <meta
          name="description"
          content="Get the best corporate health and wellness coach in los angeles CA with LifeUP, we specialize in improving workplace, employee wellness & productivity."
        />
      </Helmet>
      {/* // banner start */}
      <section className="for-top-spacing" id="home-page">
        <section id="home" className="sm-home">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 sm-none"></div>
              <div className="col-md-12 col-sm-12 col-lg-7 ">
                <div className="home-text">
                  <h1>
                    A Unique Approach <br></br>to{" "}
                    <span className="yellow-txt">Corporate Wellness</span>
                  </h1>
                  <p>
                    LifeUP Corporate Wellness designs corporate wellness
                    programs that create the 'a-ha!' moments that transform
                    ordinary lives into extraordinary lifestyles.
                  </p>
                  <a
                    href="https://calendly.com/lifeup-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn yellow-btn" type="submit">
                      schedule a call
                      <span className="home-icon">
                        <GoArrowUpRight />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner end */}
        {/* ------------------------------ */}
        {/* logo-grp start */}
        <section id="logo-grp">
          <LogoGroup />
        </section>
        {/* logo-grp end */}
        {/* ------------------------------ */}
        {/* video-section start */}
        <section id="video-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-8 video-section-inner">
                <div className="video-section-inner-text">
                  <div className="container">
                    <button
                      className="VideoImg"
                      onClick={() => openModal("638399892")}
                    >
                      <img src={VideoImg} alt="VideoImg" loading="lazy"></img>
                    </button>
                    {modalOpen && (
                      <div className="modal-overlay" onClick={closeModal}>
                        <div
                          className="modal-content"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="modal-close" onClick={closeModal}>
                            &times;
                          </span>
                          <iframe
                            src={`https://player.vimeo.com/video/${videoId}`}
                            width="800"
                            height="515"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            // loading="lazy"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 video-black-section">
                <div className="video-black-section-inner">
                  <img src={footerLogo} alt="footerLogo" loading="lazy"></img>
                  <h4 className="h4-head">
                    LifeUP's <span className="yellow-txt">Healthy Habits </span>{" "}
                    for the Busy Business Program
                  </h4>
                  <p className="text-desc">
                    is a transformational, research-backed, comprehensive
                    curriculum delivered in person, online, or in a hybrid
                    framework. (Watch the two-minute video below to learn
                    more...)
                  </p>

                  <button
                    className="btn transparent-btn"
                    type="submit"
                    onClick={() => openModal("638399892")}
                  >
                    watch video{" "}
                    <span className="home-icon">
                      <MdOutlineSlowMotionVideo />
                    </span>
                  </button>
                  {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="modal-close" onClick={closeModal}>
                          &times;
                        </span>
                        <iframe
                          src={`https://player.vimeo.com/video/${videoId}`}
                          width="800"
                          height="515"
                          frameborder="0"
                          allow="autoplay; fullscreen"
                          // loading="lazy"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* video-section end */}
        {/* ------------------------------ */}
        {/* number-counter start */}
        <section id="number-counter">
          <NumberCounter />
        </section>
        {/* number-counter end */}
        {/* ------------------------------ */}
        {/* Health & Wellness start */}
        <section id="HealthWellness" className="sm-HealthWellness">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-12 col-lg-7">
                <h4 className="h4-head">
                  Corporate{" "}
                  <span className="yellow-txt">Health & Wellness </span>
                  Coach in LA
                </h4>
                <p class="text-desc">
                  Get the best corporate health & wellness coach in Los Angeles
                  and enables your organization to…
                </p>
                <div className="healthwellenes-number">
                  <h1>01</h1>
                  <span>
                    Build a company culture that is known in the industry as one
                    that supports employees comprehensively. As a company worth
                    staying with for the long term.
                  </span>
                  <span className="YellowLine">
                    <img src={YellowLine} alt="YellowLine" loading="lazy"></img>
                  </span>
                </div>
                <div className="healthwellenes-number-white">
                  <h1>02</h1>
                  <span>
                    Create a wellness culture that has employees leading your
                    industry in fitness, wellness, and confidence.
                  </span>
                  <span className="YellowLine">
                    <img src={WhiteLine} alt="WhiteLine" loading="lazy"></img>
                  </span>
                </div>
                <div className="healthwellenes-number number3">
                  <h1>03</h1>
                  <span>
                    Offer a comprehensive wellness program that supports
                    employees live a healthier, more fulfilled life at work and
                    at home.
                  </span>
                  <span className="YellowLine">
                    <img src={YellowLine} alt="YellowLine" loading="lazy"></img>
                  </span>
                </div>
                <div className="healthwellenes-number-white">
                  <h1>04</h1>
                  <span>
                    Have a service provider handle all of the employee themes
                    and communications so HR doesn’t have to.
                  </span>
                  <span className="YellowLine">
                    <img src={WhiteLine} alt="WhiteLine" loading="lazy"></img>
                  </span>
                </div>
                <div className="healthwellenes-number number3">
                  <h1>05</h1>
                  <span>
                    See your insurance premiums go down while productivity goes
                    up.
                  </span>
                  <span className="YellowLine">
                    <img src={YellowLine} alt="YellowLine" loading="lazy"></img>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Health & Wellness end */}
        {/* ------------------------------ */}
        {/* Knowledge Quest start */}
        <section id="knowledgeQuest">
          <div className="container knowledgeQuestbg">
            <div className="row">
              <img
                src={knowledgeQuest}
                alt="knowledgeQuest"
                className="knowledgeQuestImg"
                loading="lazy"
              ></img>
            </div>
            <div className="row knowledgeQuest-text">
              <div className="col-md-5 sm-none"></div>
              <div className="col-md-12 col-lg-7">
                <h4 className="h4-head">
                  "Knowledge Quest:<br></br>
                  Engage in our quiz section & put your expertise to the test at
                  Quiz Zone."
                </h4>
                <p class="text-desc">Take Our Revealing 6-Question Quiz!</p>
                <a
                  href="https://link.apisystem.tech/widget/survey/d6PLMmGbNVaGX3PohJQt"
                  target="_blank"
                >
                  {" "}
                  <button className="btn yellow-btn black-btn" type="submit">
                    start quiz
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Knowledge Quest end */}
        {/* services start */}
        <section id="services">
          <CommonServices />
        </section>
        {/* services end */}
        {/* ------------------------------ */}
        {/* lifestyleCoach start */}
        <section id="lifestyleCoach">
          <div className="container darekimg">
            <div className="row sm-none">
              <img src={Darek} alt="Darek" loading="lazy"></img>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6 lifestyleCoachInner">
                <h4 className="h4-head">Meet Derek Opperman</h4>
                <h3>Health and Lifestyle Coach in LA</h3>
                <p class="text-desc">
                  Derek Opperman is a certified Corporate Wellness coach in LA
                  across multiple health disciplines, from fitness training to
                  nutrition design, and integrative lifestyle planning. He’s
                  also certified as a Corporate Wellness Specialist and is able
                  to speak about the importance of health at a company-wide,
                  cultural level.
                  <br></br>
                  <br></br>
                  His company LifeUP’s Healthy Habits for the Busy Business
                  program is a transformational, research-backed, comprehensive
                  curriculum delivered in-person, online, or in a hybrid
                  framework.
                </p>
                <Link to="/about">
                  <button className="btn yellow-btn" type="submit">
                    read more
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* lifestyleCoach end */}
        {/* ------------------------------ */}
        {/* Solutions start */}
        <section id="solutions">
          <div className="container padding-start">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <img src={Solution1} alt="Solution1" loading="lazy"></img>
              </div>
              <div className="col-md-12 col-lg-6 solutions-text">
                <h4 class="h4-head">
                  Solutions For The Employee/ Individual From Best Corporate
                  Health Coach In LA
                </h4>
                <p class="text-desc">
                  LifeUP offers a comprehensive Wellness program that is
                  delivered in one place.
                </p>
                <div className="before-border-text">
                  <span>
                    <h4>Exercise Feels Intimidating?</h4>
                    <p>We'll show you where to confidently start.</p>
                  </span>
                </div>
                <div className="before-border-text">
                  <span>
                    <h4>Is Stress Becoming a Burden?</h4>
                    <p>Get support working with and through it.</p>
                  </span>
                </div>
                <div className="before-border-text">
                  <span>
                    <h4>Nutrition Feels Confusing and Restrictive?</h4>
                    <p>Let's design you a 'perfect' plate.</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container padding-end">
            <div className="row">
              <div className="col-md-12 col-lg-6 solutions-text">
                <h4 class="h4-head">Solutions For The Company</h4>
                <p class="text-desc">
                  LifeUP offers a comprehensive Wellness program that is
                  delivered in one place.
                </p>
                <div className="before-border-text">
                  <span>
                    <h4>Too Much Manual Work?</h4>
                    <p>Let us do the heavy lifting.</p>
                  </span>
                </div>
                <div className="before-border-text">
                  <span>
                    <h4>Delivering Stale Content?</h4>
                    <p>We'll spice it up.</p>
                  </span>
                </div>
                <div className="before-border-text">
                  <span>
                    <h4>Need a Health Culture Boost?</h4>
                    <p>Let's build a wellness community.</p>
                  </span>
                </div>
                <div className="before-border-text">
                  <span>
                    <h4>Returning Employees to Work Can be Complicated.</h4>
                    <p>Delivering a health program doesn't have to be.</p>
                  </span>
                </div>
                <p className="solution-best">
                  Best of all: The Program can be run live, virtual, or hybrid.
                </p>
              </div>
              <div className="col-md-12 col-lg-6">
                <img src={Solution2} alt="Solution1" loading="lazy"></img>
              </div>
            </div>
          </div>
        </section>
        {/* Solutions end */}
        {/* --------------------------- */}
        {/* video testimonial start */}
        <VideoTestimonial />
        {/* video testimonial end */}
        {/* --------------------------- */}
        {/* --------------------------- */}
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
        {/* ---------------------------------- */}

        {/* --------------------------- */}
        {/* WorkplaceWellness start */}
        <section id="WorkplaceWellnessTop">
          <WorkplaceWellness />
        </section>
        {/* WorkplaceWellness end */}
        {/* --------------------------- */}
        {/* contact form start */}
        <ContactForm />
        {/* contact form end */}
        {/* --------------------------- */}
        {/* faq start */}
        <section>
          <Faq />
        </section>
        {/* faq end */}
        {/* ----------------------------- */}
        {/* ---------------------------------- */}
        {/* blog start */}
        <section id="blog">
          <div className="container">
            <div className="row">
              <h4 class="h4-head main-head">Latest Corporate Wellness News</h4>
              <div className="col-md-12 col-lg-7 blog-left">
                <a
                  href="https://lifeupcorporatewellness.com/blog/beyond-the-basics-unleashing-wellness-innovation-in-the-workplace/"
                  target="_blank"
                >
                  <div className="zoom-img">
                    <img
                      src={BeyondTheBasic}
                      alt="BeyondTheBasic"
                      loading="lazy"
                    ></img>
                  </div>
                  <div className="blog-left-text">
                    <span>
                      <h5>March 22, 2024</h5>
                      <h3>
                        Beyond the Basics: Unleashing Wellness Innovation in the
                        Workplace
                      </h3>
                    </span>

                    <button className="blog-circle">
                      <GoArrowUpRight />
                    </button>
                  </div>
                </a>
              </div>

              <div className="col-lg-5 col-md-12 ">
                <div className="blog-right">
                  <a
                    href="https://lifeupcorporatewellness.com/blog/healthy-employees-thriving-business-unlocking-the-potential-of-wellness/"
                    target="_blank"
                  >
                    <div className="blog-right-flex">
                      <div className="zoom-img">
                        <img
                          src={HealtyEmployess}
                          alt="HealtyEmployess"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="left-blog-txt">
                        <h5>March 22, 2024</h5>
                        <h3>Healthy Employees, Thriving Business: Unlocking</h3>
                        <button className="blog-circle">
                          <GoArrowUpRight />
                        </button>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="blog-right padding-top">
                  <a
                    href="https://lifeupcorporatewellness.com/blog/healthy-employees-thriving-business-unlocking-the-potential-of-wellness/"
                    target="_blank"
                  >
                    <div className="blog-right-flex">
                      <div className="zoom-img">
                        <img
                          src={LeapForward}
                          alt="LeapForward"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="left-blog-txt">
                        <h5>March 21, 2024</h5>
                        <h3>
                          Australia’s ‘Right to Disconnect’: A Leap Forward
                        </h3>
                        <a
                          href="https://lifeupcorporatewellness.com/blog/australia-s-right-to-disconnect-a-leap-forward-in-employee-well-being/"
                          target="_blank"
                        >
                          <button className="blog-circle">
                            <GoArrowUpRight />
                          </button>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog end */}
      </section>
    </>
  );
};

export default Home;
