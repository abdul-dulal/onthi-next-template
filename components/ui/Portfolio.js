import React from "react";
import Service from "./Service";
import digitalMarketing from "/public/img/digitalMarketing.png";
import service2 from "/public/img/service2.png";
import webDevelopment from "/public/img/web-development.png";
import productDesign from "/public/img/product-design.png";
const Portfolio = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-8 mb-24">
        <Service img={digitalMarketing} title=" Digital marketing" />
        <Service img={service2} title=" Brand identity" />
        <Service img={webDevelopment} title="Web development" />
        <Service img={productDesign} title=" Product design" />
      </div>
    </div>
  );
};

export default Portfolio;
