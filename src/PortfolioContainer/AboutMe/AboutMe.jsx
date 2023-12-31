import React, { useEffect, useState } from "react";
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService'
import Animations from "../../Utilities/Animations";
import AboutMeMore from "./AboutMore";

import "./AboutMe.css";
export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
 
  const SCREEN_CONSTANTS = {
    description:
      "I am an experienced Software Developer and Quality Assurance professional with a robust background in both fields.My enthusiasm for embracing new technologies and development methodologies underscores my commitment to staying at the forefront of innovation in both fields.",
      //  "With a balanced skill set, I contribute effectively to software development and testing endeavors, ensuring seamless integration and optimal performance."
      headingg: "What I do:",
  };
  const renderHighlight = () => {
    return( 
      SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
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
        
        <div className="about-me-profile">
          <div className="profile-pictureA-background">
           
          </div>
          <br></br>
          <div className="profile-text">
           {SCREEN_CONSTANTS.headingg}
          </div>
          

          <div className="about-me-description ">
              <p>I am an experienced Software Developer and Quality Assurance professional with a robust background in both fields.My enthusiasm for embracing new technologies and development methodologies underscores my commitment to staying at the forefront of innovation in both fields.",
                 With a balanced skill set, I contribute effectively to software development and testing endeavors, ensuring seamless integration and optimal performance.
               </p>
            </div>
          
           
        </div>
          <div className="about-me-details ">
            <div className="about-me-options ">
           <AboutMeMore/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}