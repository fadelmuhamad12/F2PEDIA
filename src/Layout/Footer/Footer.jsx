import React from "react";
import FooterTitle from "./FooterTitle";
import FooterCompany from "./FoterCompany";
import FooterHelp from "./FooterHelp";
import FooterFaq from "./FooterFaq";
import FooterResources from "./FooterResources";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-200 p-6 md:flex md:flex-row md:justify-around">
        <FooterTitle />
      <div className="flex gap-14">
        <FooterCompany />
        <FooterHelp />
      </div>
      <div className="flex gap-12">
        <FooterFaq />
        <FooterResources />
      </div>
    </div>
  );
};

export default Footer;
