import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import MiniProjects from "./MiniProjects";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";

import './projects.css'

export default function Projects(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="main-container fade-in" id={props.id || ""}>
    <div>
        <ScreenHeading
          title={"A Bit of My Project"}
          subHeading={"IT Related"}
        />
    <div className="section-projects" id="projects">
      <div className="projects-container">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <MiniProjects />   
      </div>
    </div>
    </div>
    </div>
 
  );
}
