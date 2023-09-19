import React, { useState } from "react";
import page4 from "../Projects/public/img/page4.jpeg";
import cssIco from "../Projects/public/img/css.png";
import reactIco from "../Projects/public/img/react.png";
import gitIco from "../Projects/public/img/githubIco.png";
import liveIco from "../Projects/public/img/live.png";
import phpIco from "../Projects/public/img/php.png";
import htmlIco from "../Projects/public/img/html.png";
import jsIco from "../Projects/public/img/js.png";
import bootIco from "../Projects/public/img/bootstrap.png";

export default function Project4() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [php, setPhp] = useState("");

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
    } else if (e.target.id == "PHP") {
      setPhp(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact(); 
    setThree();
    setPhp();
  };
  return (
    <div className="project-box">
      <div className="right-container">
        <h5>Salvatore High School Project</h5>
        <div className="description">
        I have developed the official website for Salvatore High School using a combination of HTML, 
        CSS, and JavaScript. This website serves as an online platform to showcase the schools 
        information, activities, and resources. 
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
            <div className="single-box" id="Bootstrap"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={bootIco} className="tech-ico1" alt="html icon" />
              <span>{boot ? "Bootstrap" : ""}</span>
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
              href="https://github.com/Teb94089/SalvatoreProject"
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
        <img src={page4} className="img-project2" />
      </div>
    </div>
  );
}
