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
        <div className="project-title">
          <h3>Projects</h3>
          <span>
            Below you can see my projects, check out the live demos and code on
            GitHub
          </span>
        </div>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <div className="project-title mini">
          <h3>Mini projects</h3>
          <span>
            This section includes projects from the beginning of my programming
            education and technologies in which I am just beginning to learn
          </span>
        </div>

        <MiniProjects />
      </div>
    </div>
    </div>
    </div>
 
  );
}
