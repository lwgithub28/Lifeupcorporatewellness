import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { LuSend } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { BiPencil } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("");
  const [errors, setErrors] = useState({});
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!number.trim()) {
      errors.number = "Phone number is required";
    } else if (!number.match("[0-9]{10}")) {
      errors.number = "Phone number digit must be 10";
    } else if (number.match("[0-9]{10}")) {
      setErrors(errors);
    }
    if (!option.trim() || option === "0") {
      errors.option = "Please select a service";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length === 0) {
      // Send email if no errors
      const serviceId = "service_306wnni";
      const templateId = "template_2ha3bbp";
      const publicKey = "BSvXOOJOGCrTBbdg4";
      const templateParams = {
        from_name: name,
        from_email: email,
        from_number: number,
        from_option: option,
        to_name: "Derek",
        message: message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setEmailSent(true);
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          setOption("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <section id="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h4 className="h4-head main-head">
                Join Derek's Online Community!
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="d-flex-roww">
                  <span className="fullWidth">
                    <div className="d-flex-roww-left">
                      <span className="contact-form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        type="text"
                        placeholder="full name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </span>
                  <span className="fullWidth">
                    <div className="d-flex-roww-right">
                      <span className="contact-form-icon">
                        <TfiEmail />
                      </span>
                      <input
                        type="email"
                        placeholder="email address*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </span>
                </div>
                <div className="d-flex-roww">
                  <span className="fullWidth">
                    <div className="d-flex-roww-left">
                      <span className="contact-form-icon">
                        <LuSend />
                      </span>
                      <select
                        value={option}
                        onChange={(e) => setOption(e.target.value)}
                      >
                        <option value="0">Select Services</option>
                        <option value="learning">Learning</option>
                        <option value="Conferences">Conferences</option>
                        <option value="Extended">Extended</option>
                        <option value="Invite Derek to Speak Up">
                          Invite Derek to Speak Up
                        </option>
                      </select>
                    </div>
                    {errors.option && (
                      <span className="error">{errors.option}</span>
                    )}
                  </span>
                  <span className="fullWidth">
                    <div className="d-flex-roww-right">
                      <span className="contact-form-icon">
                        <TbPhoneCall />
                      </span>
                      <input
                        type="text"
                        placeholder="Your Phone*"
                        pattern="[0-9]*"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    {errors.number && (
                      <span className="error">{errors.number}</span>
                    )}
                  </span>
                </div>
                <div className="d-flex-roww">
                  <span className="fullWidth">
                    <div className="d-flex-roww-right edit-textarea">
                      <span className="contact-form-icon">
                        <BiPencil />
                      </span>
                      <input
                        type="text"
                        placeholder="How Can We Help You?"
                        className="textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></input>
                    </div>

                    {errors.message && (
                      <span className="error">{errors.message}</span>
                    )}
                  </span>
                </div>
                <ReCAPTCHA
                  sitekey="6LfUqNspAAAAAKIis7dW95ZbnTvBp7Y9xxhcqlqe"
                  // onChange={onChange}
                />
                <div className="d-flex-roww submit-bottom">
                  <div className="d-flex-roww-left ">
                    <button className="btn yellow-btn" type="submit">
                      Book Appointment
                      <span className="home-icon">
                        <GoArrowUpRight />
                      </span>
                    </button>
                  </div>
                </div>
                {emailSent && (
                  <p className="email-sent">
                    Email sent successfully
                    <FaCheck />
                  </p>
                )}
              </form>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Email;
