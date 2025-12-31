import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { GoArrowUpRight } from "react-icons/go";
import ScheduleCall from "../../Assests/img/schedulelogo.webp";
import Logo from "../../Assests/img/logo.webp";
import Nutrition from "../../Assests/img/Nutrition.webp";
import StressManagment from "../../Assests/img/StressManagement.webp";
import Movement from "../../Assests/img/Movement.webp";
import RestRecovery from "../../Assests/img/RestRecovery.webp";
import MindsetandBelief from "../../Assests/img/MindsetandBelief.webp";
import Supplements from "../../Assests/img/Supplements.webp";
import CreativityandPlay from "../../Assests/img/CreativityandPlay.webp";
import conversationHealth from "../../Assests/img/conversationhealth.webp";
import detoxificationImg from "../../Assests/img/DetoxificationImg.webp";
import Faq from "../Common/Faq/Faq";
import CommonServices from "../Common/CommonServices/CommonServices";
import ContactForm from "../Common/ContactForm/ContactForm";
import WorkplaceWellness from "../Common/WorkplaceWellness/WorkplaceWellness";
import TopBanner from "../Common/TopBanner/TopBanner";
import { Helmet } from "react-helmet";
import { SummitsAndConferences, ChallengesSection } from "../../Data";
const Services = () => {
  const data = {
    name: "services",
  };
  return (
    <>
      <Helmet>
        <title>
          Certified Corporate Health Programs & Services in Los Angeles
        </title>
        <meta
          name="description"
          content="our certified corporate health program helps improve employee's physical and mental wellbeing. We emphasize prevention via workplace programs"
        />
      </Helmet>
      <section className="for-top-spacing" id="Services-page">
        {/* about banner start */}
        <TopBanner {...data} />
        {/* about banner end */}
        {/* ------------------------- */}
        {/* services start */}
        <section id="services">
          <div className="container">
            <div className="row">
              <h4 class="h4-head main-head">Corporate Health Program in LA</h4>
            </div>
          </div>
          <CommonServices />
        </section>
        {/* services end */}
        {/* ------------------------ */}
        {/* Professional Perspective start */}
        <section id="ProfessionalPerspective">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 class="h4-head main-head">
                  LifeUp Corporate Wellness: A Professional Perspective
                </h4>
                <p className="text-desc">
                  With so much health information out in the world, it's hard to
                  decipher what are true and relevant practices from marketing
                  and snake oils. And if one is lucky enough to find a quality
                  wellness program, how could it be implemented without a
                  laborious onboarding process?
                  <br></br> <br></br>
                  Even with these obstacles to overcome, now is not the time to
                  wait. Lack of exercise, nutrition education, and a disconnect
                  from ourselves and ourcommunities has created an epidemic of
                  chronic disease, and there's a good chance some or much of
                  your workforce has already been afflicted. What's more, the
                  responsibility of companies to support their people through
                  these challenges is reaching a crescendo. A recent survey
                  found that one in two employees would like to see the
                  companies they work for place a greater emphasis on their
                  physical and psychological needs. The call is hard to ignore.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Professional Perspective end */}
        {/* ---------------------------------- */}
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
        {/* ------------------------------ */}
        {/* foundation piller start*/}
        <section id="foundationPiller">
          <div className="container">
            <h4 class="h4-head main-head">Eight Foundational Pillars</h4>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box black-piller">
                  <div className="piller-boxLogo">
                    <img src={Logo} alt="Logo" loading="lazy"></img>
                  </div>
                  <h4 class="h4-head">
                    Result-Driven Corporate{" "}
                    <span className="yellow-txt">Health Programs</span> in LA
                  </h4>
                  <p className="text-desc">
                    Delivered in Eight Foundational Pillars, all designed to
                    teach and implement health practices that empower employees
                    with new access to actions they can imple- ment immediately.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img src={detoxificationImg} alt="Detoxification"></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">01</h4>
                        <h4 class="h4-head">Detoxification</h4>
                        <p className="text-desc">
                          Detoxification is the process of removing toxic
                          substances from the body, such as through drug use. It
                          can also refer to the period of drug withdrawal when
                          an organism returns to homeostasis afte longterm use
                          of an addictive substance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img
                          src={Nutrition}
                          alt="Nutrition"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">02</h4>
                        <h4 class="h4-head">Nutrition</h4>
                        <p className="text-desc">
                          Nutrition is the process by which organisms use food
                          to support their life. Nutrients are substances found
                          in food that the body uses to grow, reproduce, and
                          survive. The seven types of nutrients are:
                          Carbohydrates, Proteins, Fats, Vitamins, Minerals,
                          Dietary fiber, and Water.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row foundationPillerTopSpacing">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img
                          src={StressManagment}
                          alt="StressManagment"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">03</h4>
                        <h4 class="h4-head">Stress Management</h4>
                        <p className="text-desc">
                          It may seem like there's nothing you can do about
                          stress. The bills won't stop coming, there will never
                          be more hours in the day, and your work and family
                          responsibilities will always be demanding. But you
                          have a lot more control than you might think.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img src={Movement} alt="Movement" loading="lazy"></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">04</h4>
                        <h4 class="h4-head">Movement</h4>
                        <p className="text-desc">
                          Movement is a noun that means the process of moving.
                          or a change in position or posture. It can also refer
                          to a particular manner or style of moving, or the act
                          of moving people or things from one place to another.
                          For example, "She observed the gentle movement of his
                          chest as he breathed".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img
                          src={RestRecovery}
                          alt="RestRecovery"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">05</h4>
                        <h4 class="h4-head">Rest & Recovery</h4>
                        <p className="text-desc">
                          Sleep Foundation, 63% of adults report not getting
                          enough sleep. And just two days with six or less hours
                          of sleep makes one 2.5x more likely to catch a virus,
                          and it doesn’t have to be like this! Oftentimes, a
                          great night’s rest is just a few changes away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row foundationPillerTopSpacing">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img
                          src={MindsetandBelief}
                          alt="MindsetandBelief"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">06</h4>
                        <h4 class="h4-head">Mindset and Belief</h4>
                        <p className="text-desc">
                          Mindset is a person's way of thinking, and beliefs are
                          ideas that are certain to be true. Mindsets are made
                          up of beliefs, values, and attitudes that influence an
                          individual's thoughts, feelings, and actions. Beliefs
                          are ideas that are certain to be true, even if they
                          don't have solid proof.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img
                          src={Supplements}
                          alt="Supplements"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">07</h4>
                        <h4 class="h4-head">Supplements</h4>
                        <p className="text-desc">
                          Supplements are manufac- tured products that provide
                          nutrients, vitamins, or ingredients that may not be
                          consumed daily or in sufficient quantities. They can
                          also be used to supply what is needed or make an
                          addition. For example, some people take amino acids in
                          supplement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="piller-box pillars-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 piller-box-img">
                        <img
                          src={CreativityandPlay}
                          alt="CreativityandPlay"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="col-md-7 piller-box-text">
                        <h4 class="h4-head counting">08</h4>
                        <h4 class="h4-head">Creativity and Play</h4>
                        <p className="text-desc">
                          Play can help develop creativity, which is a broad
                          concept that includes imagination and the ability to
                          think of innovative ideas. Creative play is a natural
                          part of childhood development and can include
                          activities that are not governed by rules.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* foundation piller end*/}
        {/* ----------------------------- */}
        {/* black contact now start */}
        <section id="blackContactNow">
          <div className="container">
            <div className="row">
              <p className="text-desc">
                LifeUP Corporate Wellness designs corporate wellness programs
                that create the ‘a-ha!’ moments that transform ordinary lives
                into extraordinary lifestyles.
              </p>
              <Link to="/contact">
                <button className="btn yellow-btn" type="submit">
                  contact now
                  <span className="home-icon">
                    <GoArrowUpRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* black contact now end */}
        {/* ------------------------------ */}
        {/* conversationHealth start */}
        <section id="conversationHealth" className="conversationHealth">
          <div className="container">
            <div className="row">
              <h4 class="h4-head">
                Bring the conversation of health and well-being to your next
                company summit or conference!
              </h4>
              <p className="text-desc">Planning a team building event?</p>
            </div>
            <div className="row conversationHealth-inner">
              <div className="col-lg-8 col-md-12">
                {SummitsAndConferences.map((item) => {
                  return (
                    <div className="conversationHealthBox" key={item.id}>
                      <div className="img">
                        <img
                          src={item.img}
                          alt="Facilitator"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="text">
                        <h4 class="h4-head">{item.name}</h4>
                        <p className="text-desc">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-4 col-md-12">
                <img
                  src={conversationHealth}
                  alt="conversationHealth"
                  className="conversationHealthImg"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* conversationHealth end */}
        {/* ------------------------------ */}
        {/* Challenges start */}
        <section id="Challenges">
          <div className="container">
            <div className="row">
              <h4 class="h4-head">
                Challenges, Individual Pillars, and Continued Learning
              </h4>
              <p className="text-desc">
                Want to utilize one section of the Workplace Wellbeing Programs
                at a time for a particular office theme or event?
              </p>
            </div>
            <div className="row ChallengesTop">
              {ChallengesSection.map((item) => {
                return (
                  <div className="col-md-4" key={item.id}>
                    <div className="ChallengesBox">
                      <img
                        src={item.img}
                        alt="IndividualPillars"
                        loading="lazy"
                      ></img>
                      <h4 class="h4-head">{item.name}</h4>
                      <p className="text-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Challenges end */}
        {/* ------------------------ */}
        {/* FAQ start */}
        <section>
          <Faq />
        </section>
        {/* FAQ end */}
        {/* ------------------------ */}
        {/* contact form start */}
        <ContactForm />
        {/* contact form end */}
        {/* --------------------------- */}
        {/* WorkplaceWellness start */}
        <section id="WorkplaceWellnessTop">
          <WorkplaceWellness />
        </section>
        {/* WorkplaceWellness end */}
      </section>
    </>
  );
};

export default Services;
