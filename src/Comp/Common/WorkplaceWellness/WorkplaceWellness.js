import React from "react";
import Book from "../../../Assests/img/book.webp";
import { GoArrowUpRight } from "react-icons/go";
const WorkplaceWellness = () => {
  return (
    <>
      {/* WorkplaceWellness start */}
      <section id="WorkplaceWellness">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ">
              <h4 class="h4-head main-head">
                Transform Your Workplace Wellness
              </h4>
              <p class="text-desc">
                Elevate your organization’s health culture with our
                groundbreaking
              </p>
              <div className="before-border-text">
                <span>
                  <h4>
                    "8 Simple Steps to Build a Company Culture of Health HR's
                    Ultimate Employee Wellness Initiatives Workbook."
                  </h4>
                  <p>
                    This exclusive, first-of-its-kind resource in the U.S.
                    offers practical, step-by-step strategies to enhance
                    employee well-being and productivity.
                  </p>
                </span>
              </div>
              <div className="before-border-text">
                <span>
                  <h4>Why You Need This eBook:</h4>
                  <ul>
                    <li>
                      {" "}
                      <p>Implement proven wellness strategies.</p>
                    </li>
                    <li>
                      {" "}
                      <p>Gain a competitive edge in employee satisfaction.</p>
                    </li>
                    <li>
                      {" "}
                      <p>Foster a thriving, health-focused workplace.</p>
                    </li>
                    <li>
                      {" "}
                      <p>Start shaping a healthier future for your business.</p>
                    </li>
                  </ul>
                </span>
              </div>
              <a href="/lifecoporateBook.pdf" target="_blank">
                {" "}
                <button className="btn yellow-btn black-btn" type="submit">
                  download now
                  <span className="home-icon">
                    <GoArrowUpRight />
                  </span>
                </button>
              </a>
            </div>
            <div className="col-lg-5 col-md-12 book-img">
              <img src={Book} alt="Book"></img>
            </div>
          </div>
        </div>
      </section>
      {/* Workplace Wellness end */}
    </>
  );
};

export default WorkplaceWellness;
