import React, { useState } from "react";
import page3 from "../Projects/public/img/mzamo.png";
import htmlIco from "../Projects/public/img/html.png";
import cssIco from "../Projects/public/img/css.png";
import jsIco from "../Projects/public/img/js.png";
import bootIco from "../Projects/public/img/bootstrap.png";
import reactIco from "../Projects/public/img/react.png";
import threeIco from "../Projects/public/img/three.png";
import gitIco from "../Projects/public/img/githubIco.png";
import liveIco from "../Projects/public/img/live.png";
import firebaseIco from "../Projects/public/img/firebase.png";

export default function Project3() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    } else if (e.target.id == "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page3} className="img-project3" />
      </div>
      <div className="right-container">
        <h1>Online Portfolio</h1>
        <div className="description">
        I have crafted my online portfolio using the versatile capabilities of React.js for the 
        frontend and harnessed the power of Node.js for the backend. This dynamic combination 
        has allowed me to create an engaging and interactive showcase of my work and achievements. 
        Through React.js, I've been able to design an aesthetically appealing and user-friendly 
        frontend interface, while Node.js serves as the backend foundation, enabling robust data 
        management and facilitating seamless interactions between users and the portfolio. 
        The result is a dynamic and responsive online portfolio that effectively highlights my skills, projects, and accomplishments.
          <div className="tech-box">
            <div
              className="single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico1" alt="html icon" />
              <span>{react ? "React" : ""}</span>
            </div>
            <div
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </div>
            <div
              className="single-box"
              id="Firebase"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={firebaseIco}
                className="tech-ico1"
                alt="firebase icon"
              />
              <span>{firebase ? "Firebase" : ""}</span>
            </div>
          </div>
          <div className="links">
            <a href="#projects">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="#projects">
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
