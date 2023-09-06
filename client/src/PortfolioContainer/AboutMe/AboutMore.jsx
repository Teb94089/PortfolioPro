import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { useRef, useState } from "react";

import "./AboutMe.css";

export default function AboutMeMore(props) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };


  const SCREEN_CONSTSANTS = {
    highlights: {
      bullets: [
        "Proficient in Selenium for web automation testing",
        "Familiar with Micro Focus Unified Functional Tester (UFT) for functional testing.",
        "Skilled in Java, JavaScript, and VBScript for test script development.",
        "Experienced in creating robust test frameworks and performing data-driven testing.",
        "Capable of automating web and desktop applications effectively",
        "Strong focus on improving software quality and streamlining testing processes.",
      ],
      heading: "Here are a Few Highlights:",
    },
};

const SCREEN_CONSTSANT = {
    highlights: {
      bully: [
        "Full-stack developer with expertise in JavaScript, Java, Python, C#, VB.Net, HTML, CSS, PHP, and SQL.",
        "Proficient in both front-end and back-end development.",
        "Skilled in building web applications using a variety of programming languages and technologies.",
        "Experienced in database management and SQL for efficient data storage and retrieval.",
        "Capable of developing robust and responsive user interfaces with HTML, CSS, and JavaScript.",
        "Strong problem-solving and troubleshooting skills to ensure smooth functionality across the entire application stack.",
      ],
    }
}

const renderHighlight = () => {
    if (SCREEN_CONSTSANTS.highlights.bullets) {
      return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      ));
    }
   
  };

  const renderHighlights = () => {
    if (SCREEN_CONSTSANT.highlights.bully) {
      return SCREEN_CONSTSANT.highlights.bully.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      ));
    }
    
  };
  

  return (
    <div className="about-me-highlights">
      <div className="highlight-heading ">
        <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
      </div>
      {renderHighlight()}
      {isShowMore && (
        <div>
          <div className="highlight-heading">
            <span>{SCREEN_CONSTSANT.highlights}</span>
          </div>
          {renderHighlights()}
       
        </div>
      )}

      <button className="btn primary-btn " onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
