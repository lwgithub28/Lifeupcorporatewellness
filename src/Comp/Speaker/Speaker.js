import React from "react";
import "./Speaker.css";
import TopBanner from "../Common/TopBanner/TopBanner";
import DiscussionTopicsDarrek from "../../Assests/img/discussiontopicsdereek.webp";
import { GoArrowUpRight } from "react-icons/go";
import schedule from "../../Assests/img/schedule.webp";
import play from "../../Assests/img/play.webp";
import stress from "../../Assests/img/stressed.webp";
import Detoxification from "../../Assests/img/detoxification.webp";
import Exercise from "../../Assests/img/exercise.webp";
import rest from "../../Assests/img/rest.webp";
import instagram from "../../Assests/img/instagram.webp";
import facebook from "../../Assests/img/facebook.webp";
import linkdlin from "../../Assests/img/linkdlin.webp";
import summits from "../../Assests/img/summits.webp";
import VideoTestimonial from "../Common/VideoTestimonial/VideoTestimonial";
import WorkplaceWellness from "../Common/WorkplaceWellness/WorkplaceWellness";
import ContactForm from "../Common/ContactForm/ContactForm";
import { Helmet } from "react-helmet";
const Speaker = () => {
  const data = {
    name: "Speaker",
  };
  return (
    <>
      <Helmet>
        <title> Derek Opperman - The Health and Wellness Coach</title>
        <meta
          name="description"
          content="Explore the stunning artwork of Harry Boone, a painter known for his vibrant landscapes & captivating portraits. Discover his latest collections and upcoming."
        />
      </Helmet>
      <section className="for-top-spacing" id="Speaker-page">
        {/* Speaker banner start */}
        <TopBanner {...data} />
        {/* Speaker banner end */}
        {/* ------------------------- */}
        {/* Speaker-inner banner start */}
        <section id="SpeakerInner">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 DerekSpeakerImg">
                <h4 className="h4-head main-head">Derek Opperman</h4>
                <p className="text-desc">
                  LifeUP: A radical new approach to corporate health, wellness
                  and a thriving workplace culture.
                </p>
                {/* <img src={DerekSpeaker} alt='DerekSpeaker'></img> */}
              </div>
              <div className="col-lg-8">
                <div className="DerekSpeakerImgText">
                  <h4 className="h4-head main-head">
                    LifeUP delivers comprehensive, experiential programs that
                    deliver the ‘a-ha’ moments that transform the wellness of
                    companies, leaving their employees looking, feeling, and
                    performing their very best.
                  </h4>
                  <p className="text-desc">
                    Derek is a corporate wellness coach and lifestyle expert who
                    supports employees to experience the fulfillment of their
                    potential so that their companies save money and build a
                    flourishing culture of all-in-one turnkey premium service.
                    <br></br>
                    <br></br>
                    His company LifeUP's Healthy Habits for the Busy Business
                    program is a transformational, research-backed,
                    comprehensive curriculum delivered in-person, online, or in
                    a hybrid framework.<br></br>
                    <br></br>
                    Derek is a decorated athlete, all-natural physique
                    competitor, and Fortune 500 speaker who never forgets he was
                    just a middle-class kid with a big head, bad haircut, and
                    bad skin until he discovered health is a choice to make
                    every single day. He acknowledges and speaks to the
                    innernerd in all of us. Derek is based in LA, California,
                    and is available for speaking events across the US, global
                    and virtual summits, podcasts, and interviews.
                  </p>
                  <a
                    href="https://calendly.com/lifeup-health"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn yellow-btn" type="submit">
                      INVITE DEREK TO SPEAK AT YOUR NEXT EVENT
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
        {/* Speaker-inner banner end */}
        {/* ---------------------------------- */}
        {/* DiscussionTopics start */}
        <section id="DiscussionTopics">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="DiscussionTopicsText">
                  <h4 className="h4-head main-head">Derek Opperman</h4>
                  <div className="DiscussionTopicsText-IconBox">
                    <div className="img">
                      <img src={schedule} alt="schedule" loading="lazy"></img>
                    </div>
                    <div className="text">
                      <p className="text-desc">
                        You have the time! How to weave health and wellbeing
                        into an impossible schedule.
                      </p>
                    </div>
                  </div>
                  <div className="DiscussionTopicsText-IconBox">
                    <div className="img">
                      <img src={play} alt="play" loading="lazy"></img>
                    </div>
                    <div className="text">
                      <p className="text-desc">
                        Nutrition - foundational foods that boost energy and
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="DiscussionTopicsText-IconBox">
                    <div className="img">
                      <img src={stress} alt="stress" loading="lazy"></img>
                    </div>
                    <div className="text">
                      <p className="text-desc">
                        Stress mitigation - practices to master yourself and
                        your environment.
                      </p>
                    </div>
                  </div>
                  <div className="DiscussionTopicsText-IconBox">
                    <div className="img">
                      <img
                        src={Detoxification}
                        alt="Detoxification"
                        loading="lazy"
                      ></img>
                    </div>
                    <div className="text">
                      <p className="text-desc">
                        Detoxification strategies - cleaning up our bodies in a
                        toxic world.
                      </p>
                    </div>
                  </div>
                  <div className="DiscussionTopicsText-IconBox">
                    <div className="img">
                      <img src={Exercise} alt="Exercise" loading="lazy"></img>
                    </div>
                    <div className="text">
                      <p className="text-desc">
                        Exercise and movement - what type and how much is best
                        for you.
                      </p>
                    </div>
                  </div>
                  <div className="DiscussionTopicsText-IconBox">
                    <div className="img">
                      <img src={rest} alt="rest" loading="lazy"></img>
                    </div>
                    <div className="text">
                      <p className="text-desc">
                        Why Rest and Recovery are the secret to peak
                        performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  src={DiscussionTopicsDarrek}
                  alt="DiscussionTopicsDarrek"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* DiscussionTopics end */}
        {/* -------------------------- */}
        {/* online start */}
        <section id="online">
          <div className="container">
            <div className="row">
              <h4 className="h4-head main-head">join derek online</h4>
              <div className="col-md-4">
                <a
                  href="https://www.facebook.com/people/Lifeup-Corporate-Wellness/61556157465947/"
                  target="_blank"
                >
                  <img src={facebook} alt="facebook" loading="lazy"></img>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="https://www.linkedin.com/company/lifeup-corporate-wellness-llc/"
                  target="_blank"
                >
                  <img src={linkdlin} alt="linkdlin" loading="lazy"></img>
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.instagram.com/_life_up_/" target="_blank">
                  <img src={instagram} alt="instagram" loading="lazy"></img>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* online end */}
        {/* ------------------- */}
        {/* podcastConference start */}
        <section id="podcastConference">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-sm-12 col-md-12 podcastConferenceImg">
                <img src={summits} alt="summits" loading="lazy"></img>
              </div>
              <div className="col-lg-7 col-sm-12 col-md-12 podcastConferenceImgtext">
                <h4 className="h4-head main-head">
                  Do you have a podcast, conference, or live event coming up?
                </h4>
                <p className="text-desc">
                  Derek is the #1 Coaching and Consulting Professional in the
                  industry for having employers and employees experience
                  fulfillment through holistic, comprehensive corporate health
                  and wellness programs.<br></br>
                  <br></br>
                  Derek is your #1 keynote and motivational speaker on the
                  future of corporate Health and Wellness Programs.<br></br>
                  <br></br>
                  From his own origin story of overcoming physical challenges,
                  and a parent needing mental health support, to the 1000's 1:1
                  clients that have relied on Derek's whole being coaching, his
                  talks will inspire, engage, and motivate your employees from
                  leadership to supporting staff members.
                </p>
                <a
                  href="https://calendly.com/lifeup-health"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn yellow-btn black-btn" type="submit">
                    INVITE DEREK TO SPEAK
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /* podcastConference end */}
        {/* ----------------------------- */}
        {/* video-section start */}
        <VideoTestimonial />
        {/* video-section end */}
        {/* --------------------------- */}
        {/* WorkplaceWellness start */}
        <WorkplaceWellness />
        {/* WorkplaceWellness end */}
        {/* ------------------------------- */}
        {/* ContactForm start */}
        <ContactForm />
        {/* ContactForm end */}
        {/* ------------------------------- */}
        {/* contact now start */}
        <section id="contactNow">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <p class="text-desc">
                  If you have any questions or inquiries about our Corporate
                  Wellness Programs, Please reach out so we can begin to
                  discover what an impactful program for your team could look
                  like.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 contactNowBtn">
                <a href="/contact">
                  <button className="btn yellow-btn black-btn" type="submit">
                    contact Now
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* contact now end */}
      </section>
    </>
  );
};

export default Speaker;
