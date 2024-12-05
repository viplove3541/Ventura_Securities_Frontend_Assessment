import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ link }) => {
  return (
    <div className="breadcrumb secondaryText">
      <Link className="breadcrumb-link" to="/">
        Home
      </Link>
      {link && (
        <>
          <p>&gt;</p>
          <Link className="breadcrumb-link" to="/detailpage">
            Market watch
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
