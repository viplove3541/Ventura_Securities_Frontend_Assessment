import React, { useState, useEffect } from "react";

const About = ({ companyName }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="detail">
      <p style={{ marginBottom: "13px" }} className="primaryText">
        {isSmallScreen ? `${companyName} Private Limited` : "About the company"}
      </p>
      <div className="secondaryText">
        <p>
          {isSmallScreen && !isExpanded
            ? `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            debitis architecto quis quo totam optio quos, amet eos facere
            doloremque omnis cumque beatae obcaecati praesentium porro...`
            : `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            debitis architecto quis quo totam optio quos, amet eos facere
            doloremque omnis cumque beatae obcaecati praesentium porro. Aliquam
            cum debitis harum dignissimos est adipisci nihil veniam accusantium
            aliquid, laudantium, eum blanditiis vero a fugiat dolorem tempore
            minima sed nobis natus? Consequatur eos autem nostrum veritatis
            repudiandae natus at, provident ipsam itaque inventore quidem, nemo
            accusantium magni ipsum. Impedit quisquam, numquam dolores laudantium
            enim illo modi accusantium eos delectus nostrum maiores, placeat
            voluptate nesciunt voluptates vitae! Illum consectetur fuga ex
            suscipit totam.`}
        </p>
        {isSmallScreen && (
          <button
            onClick={handleToggle}
            style={{
              background: "none",
              border: "none",
              color: "orange",
              cursor: "pointer",
              textDecoration: "underline",
              padding: 0,
              fontSize: "9px", // Makes the button 2px larger than the text size
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
