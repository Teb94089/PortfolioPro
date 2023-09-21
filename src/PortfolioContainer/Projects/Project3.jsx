import React, { useState } from "react";
import page3 from "../Projects/public/img/page3.jpeg";
import htmlIco from "../Projects/public/img/html.png";
import cssIco from "../Projects/public/img/css.png";
import jsIco from "../Projects/public/img/js.png";
import bootIco from "../Projects/public/img/bootstrap.png";
import reactIco from "../Projects/public/img/react.png";
import nodeIco from "../Projects/public/img/node.png";
import gitIco from "../Projects/public/img/githubIco.png";
import liveIco from "../Projects/public/img/live.png";
import firebaseIco from "../Projects/public/img/firebase.png";

export default function Project3() {
 
  const [react, setReact] = useState("");
  const [node,setNode] = useState("");
 

  const handleMouseEnter = (e) => {
    if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Node.js") {
      setNode(true);
    
    }
  };
  const handleMouseLeave = () => {
    setReact();
    setNode();
    
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page3} className="img-project3" />
      </div>
      <div className="right-container">
        <h5>Online Portfolio</h5>
        <div className="description">
        I have crafted my online portfolio using the versatile capabilities of React.js for the 
        frontend and harnessed the power of Node.js for the backend. This dynamic combination 
        has allowed me to create an engaging and interactive showcase of my work and achievements. 
        
        <div className="tech-box">
          <div className="row">
            <div
              className="single-box"id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico1" alt="html icon" />
              <span>{react ? "React" : ""}</span>
            </div>
            
            <div className="single-box" id="Node.js"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={nodeIco} className="tech-ico1" alt="html icon" />
              <span>{node ? "Node.Js" : ""}</span>
            </div>
           
          </div>
          </div>
        
  
          <div className="links">
            <a href="https://github.com/Teb94089/portfolio">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="https://myportfoliop-88f94b720e4d.herokuapp.com/">
              <img
                src={liveIco}
                className="liveIco"
                target="blank"
                alt="live icon"
              />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
