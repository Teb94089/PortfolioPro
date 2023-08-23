import React, { useEffect } from "react";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService'
import Animations from "../../Utilities/Animations";

import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "QA Engineer(Software Automation Tester) with Software Development background. Have a small business(Forever Living Products). An enthusiast for new technology and development. ",
    highlights: {
      bullets: [
        "Proficient in Selenium for web automation testing",
        "Familiar with Micro Focus Unified Functional Tester (UFT) for functional testing.",
        "Skilled in Java, JavaScript, and VBScript for test script development.",
        "Experienced in creating robust test frameworks and performing data-driven testing.",
        "Capable of automating web and desktop applications effectively",
        "Strong focus on improving software quality and streamlining testing processes.",
        "Full-stack developer with expertise in JavaScript, Java, Python, C#, VB.Net, HTML, CSS, PHP, and SQL.",
        "Proficient in both front-end and back-end development.",
        "Skilled in building web applications using a variety of programming languages and technologies.",
        "Experienced in database management and SQL for efficient data storage and retrieval.",
        "Capable of developing robust and responsive user interfaces with HTML, CSS, and JavaScript.",
        "Strong problem-solving and troubleshooting skills to ensure smooth functionality across the entire application stack.",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return( 
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "></div>
        <span>{value}</span>
      </div>
      ))
    )
  };

  return (
    <div
      className="about-me-container screen-container fade-in "
      id={props.id || ""}
      
    >
      
      <div className="about-me-parent ">
        <ScreenHeading title={"About Me"} subHeading={"My Portfolio Overview"} />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
            <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
              <a href="My_CV_2_0.pdf" download="My Portfolio.pdf">
                <button className="btn highlighted-btn ">Get Portfolio</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}