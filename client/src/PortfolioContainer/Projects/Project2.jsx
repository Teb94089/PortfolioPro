import React, { useState } from "react";
import page2 from "../Projects/public/img/page2.jpeg";
import cssIco from "../Projects/public/img/css.png";
import reactIco from "../Projects/public/img/react.png";
import gitIco from "../Projects/public/img/githubIco.png";
import liveIco from "../Projects/public/img/live.png";
import phpIco from "../Projects/public/img/php.png";
import htmlIco from "../Projects/public/img/html.png";
import jsIco from "../Projects/public/img/js.png";
import bootIco from "../Projects/public/img/bootstrap.png";

export default function Project2() {
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
      <div className="right-container">
        <h1>WSU Online System Project</h1>
        <div className="description">
        I have designed and developed an online system for Walter Sisulu University (WSU) 
        that facilitates a range of functionalities to support student interactions 
        and administrative processes. 
          <div className="tech-box">
          <div className="row">
            <div
              className="single-box"id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : "HTML"}</span>
            </div>
            
            <div className="single-box" id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "CSS" : "CSS"}</span>
            </div>
            <div className="single-box" id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={jsIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "JavaScript" : "JavaScript"}</span>
            </div>
            
            <div className="single-box" id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={phpIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "PHP" : "PHP"}</span>
            </div>
          </div>
          </div>
        
  
          <div className="links">
            <a
              href="https://github.com/Teb94089/WSUProject"
              target="blank"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://github.com/Teb94089/WSUProject"
              target="_blank" rel="noreferrer"
            >
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
     
      <div className="left-container">
        <img src={page2} className="img-project2" />
      </div>
    </div>
  );
}
