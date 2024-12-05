import React, { useState, useEffect } from "react";
import { IPO_TIMELINE } from "./Schema/TimelineSchema";

const Timeline = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check for screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 600); // Adjust breakpoint if needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div style={{ margin: "20px 0" }} className="detail">
      <p style={{ marginBottom: "13px" }} className="primaryText">
        IPO timeline
      </p>
      <div className="wrapper">
        <div className="progress-container">
          <div className="progress-line"></div>
          {IPO_TIMELINE.map((step, index) => (
            <div key={step.id} className={`step ${step.status}`}>
              <div
                className="circle"
                style={{
                  color: isSmallScreen && index > 0 ? "transparent" : "white", // Hide tick for all steps except the first on small screen
                }}
              >
                ✔
              </div>
            </div>
          ))}
        </div>
        <div className="labels-container">
          {IPO_TIMELINE.map((step, index) => (
            <div key={step.id} className="label">
              <span>{step.label}</span>
              <p className="secondaryText">{step.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
