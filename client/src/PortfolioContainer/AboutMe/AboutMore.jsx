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
    const SCREEN_CONSTSANTS = {
        description:
          "I am an experienced Software Developer and Quality Assurance professional with a robust background in both fields.  My enthusiasm for embracing new technologies and development methodologies underscores my commitment to staying at the forefront of innovation in both fields. With a balanced skill set, I contribute effectively to software development and testing endeavors, ensuring seamless integration and optimal performance. ",
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
         <div className="about-me-details ">
            
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
            );
}