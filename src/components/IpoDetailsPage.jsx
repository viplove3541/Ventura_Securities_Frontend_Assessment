import React from "react";
import ListPageTitle from "./ListPageTitle";
import About from "./About";
import IpoTimeline from "./Timeline";
import Details from "./Details";
import DetailsHeader from "./DetailsHeader";
import Breadcrumb from "./Breadcrumb";

const IpoDetailsPage = ({ ipoDetails }) => {
  const { company, link, logo } = ipoDetails || {};
  return (
    <>
      <ListPageTitle title="IPO Details Page" />
      <Breadcrumb link={link} />
      <div>
        <DetailsHeader company={company} logo={logo} />
        <Details />
        <IpoTimeline />
        <About companyName={company} /> {/* Pass the company name */}
      </div>
    </>
  );
};

export default IpoDetailsPage;
