import React, { useState } from "react";
import page2 from "../Projects/public/img/page2.jpeg";
import cssIco from "../Projects/public/img/css.png";

import gitIco from "../Projects/public/img/githubIco.png";
import liveIco from "../Projects/public/img/live.png";
import phpIco from "../Projects/public/img/php.png";
import htmlIco from "../Projects/public/img/html.png";
import jsIco from "../Projects/public/img/js.png";


export default function Project2() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [php, setPhp] = useState("");


  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaS...") {
      setJs(true);
    } else if (e.target.id =="PHP") {
      setPhp(true);
   
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setPhp();
   
    
  };
  return (
    <div className="project-box">
      <div className="right-container">
        <h5>WSU Online System Project</h5>
        <div className="description">
        I have designed and developed an online system for Walter Sisulu University (WSU) 
        that facilitates a range of functionalities to support student interactions 
        and administrative processes. 
          <div className="tech-box">
          <div className="row">
            <div
              className="single-box"id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : ""}</span>
            </div>
            
            <div className="single-box" id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico1" alt="html icon" />
              <span>{css ? "CSS" : ""}</span>
            </div>
            <div className="single-box" id="JavaS..."
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={jsIco} className="tech-ico1" alt="html icon" />
              <span>{js ? "JavaS..." : ""}</span>
            </div>
            
            <div className="single-box" id="PHP"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={phpIco} className="tech-ico1" alt="html icon" />
              <span>{php ? "PHP" : ""}</span>
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
              href="https://wsuhtml.000webhostapp.com/index.html"
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
