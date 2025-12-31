import React, { useState, useEffect } from "react";
import "./NumberCounter.css";
const NumberCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const counter = (minimum, maximum, setCount) => {
    let intervalId;
    for (let i = minimum; i <= maximum; i++) {
      ((index) => {
        intervalId = setTimeout(() => {
          setCount(index);
        }, (index - minimum) * 5); // Decreased timeout duration to speed up animation
      })(i);
    }
    // Clear the interval after reaching the maximum value
    return intervalId;
  };

  useEffect(() => {
    const counter1Id = counter(0, 153, setCount1);
    const counter2Id = counter(0, 11, setCount2);
    const counter3Id = counter(0, 12, setCount3);
    const counter4Id = counter(0, 500, setCount4);
    // Clean up the intervals when component unmounts
    return () => {
      clearTimeout(counter1Id);
      clearTimeout(counter2Id);
      clearTimeout(counter3Id);
      clearTimeout(counter4Id);
    };
  }, []);

  return (
    <>
      <div className="container number-counter">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 ">
            <h1>{count1}</h1>
            <p>PROJECTS DELIVERED </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3">
            <h1> {count2}</h1>
            <p>TEAM MEMBERS</p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3">
            <h1>{count3}+</h1>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3">
            <h1>{count4}+</h1>
            <p>WORLD WIDE CLIENTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberCounter;
