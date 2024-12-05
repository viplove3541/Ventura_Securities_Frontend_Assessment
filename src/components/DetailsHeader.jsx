import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ company, logo }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check for screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleFileLogoClick = () => {
    alert("File logo button clicked!");
  };

  const handleApplyClick = () => {
    alert("Apply Now button clicked!");
  };

  return (
    <div className="details-header details-header_elements">
      <div className="details-header_elements">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="elements-border"
        >
          &lt;
        </Link>
        <div className="issueDate">
          <img src={logo} alt={`${company} Logo`} />
          <div>
            <p className="primaryText">{company}</p>
            <p className="secondaryText">{company} Private Limited</p>
          </div>
        </div>
      </div>
      <div className="details-header_elements">
        {/* Hide the downward arrow and apply button on small screens */}
        {!isSmallScreen && (
          <>
            <button
              className="elements-border"
              style={{
                border: "2px solid black",
                padding: "5px 15px",
                display: "inline-block",
                marginBottom: "8px",
                marginRight: "10px",
                fontSize: "25px",
                background: "none",
                cursor: "pointer",
              }}
              onClick={handleFileLogoClick}
            >
              <img
                src="/images/file.png"
                alt="File with Down Arrow"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
            <button
              className="apply-btn"
              style={{
                display: "inline-block",
                backgroundColor: "#291660",
                color: "white",
                padding: "11px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={handleApplyClick}
            >
              Apply now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsHeader;
