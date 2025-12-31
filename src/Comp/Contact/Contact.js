import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import ContactDarrek from "../../Assests/img/contactderrek.webp";
import ContactForm from "../Common/ContactForm/ContactForm";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import TopBanner from "../Common/TopBanner/TopBanner";
import { Helmet } from "react-helmet";
const Contact = () => {
  const data = {
    name: "contact",
  };
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="If you have any questions or inquiries about our Corporate Wellness Programs, 
        please reach out so we can begin to discover what an impactful program for your team could look like"
        />
      </Helmet>
      <section className="for-top-spacing" id="contact-page">
        {/* about banner start */}
        <TopBanner {...data} />
        {/* about banner end */}
        {/* ------------------------- */}
        {/* get in touch start */}
        <section id="getInTouch">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  src={ContactDarrek}
                  alt="ContactDarrek"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 getInTouch-inner">
                <h4 class="h4-head main-head">Get In Touch</h4>
                <p class="text-desc">
                  If you have any questions or inquiries about our Corporate
                  Wellness Programs or Health And Wellness Coach.<br></br>
                  Please reach out so we can begin to discover what an impactful
                  program for your team could look like.
                </p>
                <a href="tel:(310) 683-3374">
                  <BsFillTelephonePlusFill /> <p>(310) 683-3374</p>
                </a>
                <a
                  href="mailto:hello@lifeupcorporatewellness.com"
                  target="_blank"
                >
                  <IoMdMail /> <p>hello@lifeupcorporatewellness.com</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* get in touch end */}
        {/* ------------------------- */}
        {/* contact form start */}
        <ContactForm />
        {/* contact form end */}
        {/* ----------------------------- */}
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
                <Link to="/about">
                  <button className="btn yellow-btn black-btn" type="submit">
                    about me
                    <span className="home-icon">
                      <GoArrowUpRight />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* contact now end */}
      </section>
    </>
  );
};

export default Contact;
