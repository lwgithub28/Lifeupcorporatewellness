import React from "react";
import { Link } from "react-router-dom";
import "./InnerServices.css";
import { GoArrowUpRight } from "react-icons/go";
import TopBanner from "../Common/TopBanner/TopBanner";
import ScheduleCall from "../../Assests/img/schedulelogo.webp";
import LunchLearn from "../../Assests/img/lunchlearn.webp";
import checkArrow from "../../Assests/img/checkarrow.webp";
import InternalStretching from "../../Assests/img/internalstretching.webp";
import WellnessClassesImg from "../../Assests/img/wellnessclassesimg.webp";
import GroupFitness from "../../Assests/img/GroupFitness.webp";
import NutritionTutorials from "../../Assests/img/NutritionTutorials.webp";
import Yoga from "../../Assests/img/Yoga.webp";
import ContentCreation from "../../Assests/img/contentcreation.webp";
import ContactForm from "../Common/ContactForm/ContactForm";
import SoundBowls from "../../Assests/img/SoundBowls.webp";
import GuidedBreathWork from "../../Assests/img/GuidedBreathWork.webp";
import CreativityandPlay from "../../Assests/img/CreativityPlay.webp";
import Faq from "../Common/Faq/Faq";
const Learning = () => {
  const data = {
    name: "Learning",
  };
  return (
    <>
      <section className="for-top-spacing Inner-page" id="Learning-page">
        {/* Speaker banner start */}
        <TopBanner {...data} />
        {/* Speaker banner end */}
        {/* ------------------------- */}
        {/* Lunch and Learns start */}
        <section id="LunchLearn" className="LearningSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 LearningSectionText">
                <h4 className="h4-head main-head">
                  Lunch and Learns, Open Mics
                </h4>
                <p className="text-desc">
                  25-50+ minute live, immersive sessions based on specific
                  wellness topics, delivered at your office or through digital
                  platform of choice.
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
                        Can align with specific HR or seasonal initiatives.
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
                      <h6>Over 30 topics to choose from.</h6>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img src={LunchLearn} alt="LunchLearn" loading="lazy"></img>
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
                  Internal Stretching Videos
                </h4>
                <p className="text-desc">
                  Support your staff with OSHA-certified movement safety videos.
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
                        Tailored to your employee needs & movement patterns.
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
                      <h6>Can be shot on-site or at our studio.</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Full-service production crew available.</h6>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img
                  src={InternalStretching}
                  alt="InternalStretching"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* Internal Stretching end */}
        {/* ------------------------- */}
        {/* Wellness Classes start */}
        <section id="WellnessClasses">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 LearningSectionText">
                <h4 className="h4-head main-head">Wellness Classes</h4>
                <p className="text-desc">
                  25-50+ minute classes, delivered live or digitally on your
                  platform of choice.
                </p>
                <div className="sm-none">
                  <div className="WellnessClassesBox WellnessClassesBox1">
                    <div className="firstBox xs-none">
                      <img
                        src={GroupFitness}
                        alt="GroupFitness"
                        loading="lazy"
                      ></img>
                      <h3>Group Fitness</h3>
                    </div>
                    <div className="firstBox xs-none">
                      <img
                        src={NutritionTutorials}
                        alt="NutritionTutorials"
                        loading="lazy"
                      ></img>
                      <h3>Nutrition Tutorials</h3>
                    </div>
                    <div className="firstBox xs-none">
                      <img src={Yoga} alt="Yoga" loading="lazy"></img>
                      <h3>
                        <span className="visibility-none">Yogaff</span>Yoga
                        <span className="visibility-none">Yogaff</span>
                      </h3>
                    </div>
                  </div>
                  <div className="WellnessClassesBox">
                    <div className="firstBox xs-none">
                      <img
                        src={SoundBowls}
                        alt="SoundBowls"
                        loading="lazy"
                      ></img>
                      <h3>Sound Bowls</h3>
                    </div>
                    <div className="firstBox xs-none">
                      <img
                        src={GuidedBreathWork}
                        alt="GuidedBreathWork"
                        loading="lazy"
                      ></img>
                      <h3>Guided Breath Work</h3>
                    </div>
                    <div className="firstBox xs-none">
                      <img
                        src={CreativityandPlay}
                        alt="CreativityandPlay"
                        loading="lazy"
                      ></img>
                      <h3>Creativity and play</h3>
                    </div>
                  </div>
                </div>
                <div className="lg-none">
                  <div className="WellnessClassesBox">
                    <div className="firstBox lg-none">
                      <img
                        src={GroupFitness}
                        alt="GroupFitness"
                        loading="lazy"
                      ></img>
                      <h3>Group Fitness</h3>
                    </div>
                    <div className="firstBox lg-none">
                      <img
                        src={NutritionTutorials}
                        alt="NutritionTutorials"
                        loading="lazy"
                      ></img>
                      <h3>Nutrition Tutorials</h3>
                    </div>
                  </div>
                  <div className="WellnessClassesBox">
                    <div className="firstBox lg-none">
                      <img src={Yoga} alt="Yoga" loading="lazy"></img>
                      <h3>Nutrition Tutorials</h3>
                    </div>
                    <div className="firstBox lg-none">
                      <img
                        src={SoundBowls}
                        alt="SoundBowls"
                        loading="lazy"
                      ></img>
                      <h3>Sound Bowls</h3>
                    </div>
                  </div>
                  <div className="WellnessClassesBox">
                    <div className="firstBox lg-none">
                      <img
                        src={GuidedBreathWork}
                        alt="GuidedBreathWork"
                        loading="lazy"
                      ></img>
                      <h3>Guided Breath Work</h3>
                    </div>
                    <div className="firstBox lg-none">
                      <img
                        src={CreativityandPlay}
                        alt="CreativityandPlay"
                        loading="lazy"
                      ></img>
                      <h3>Creativity and play</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 ContentCreationImg">
                <img
                  src={WellnessClassesImg}
                  alt="WellnessClassesImg"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* Wellness Classes end */}
        {/* ----------------------------- */}
        {/* Content Creation start */}
        <section id="ContentCreation" className="LearningSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 LearningSectionText">
                <h4 className="h4-head main-head">Content Creation</h4>
                <p className="text-desc">
                  Let LifeUP deliver your employees weekly dose of health news.
                </p>
                <ul>
                  <li>
                    <span className="navbar-top-link chngFont">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Wellness newsletters and digital posts.</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Custom videos.</h6>
                    </span>
                  </li>
                  <li>
                    <span target="_blank" className="navbar-top-link">
                      <img
                        src={checkArrow}
                        alt="checkArrow"
                        loading="lazy"
                      ></img>
                      <h6>Aligns with internal initiatives.</h6>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 ">
                <img
                  src={ContentCreation}
                  alt="ContentCreation"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* Content Creation end */}
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

export default Learning;
