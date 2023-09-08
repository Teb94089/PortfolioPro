// eslint-disable-next-line no-unused-vars
import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import ScrollService from '../../../Utilities/ScrollService';
import "./Profile.css";

export default function Profile() {

   const stringSplitter = (string)=>{
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);

   }

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              
              <a href="https://www.linkedin.com/in/nonkululeko-tebeni-938a86190/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCBXTZ6zYQ7dQO46poYqnU7w">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, IM{" "}
              <span className="highlighted-text">
                Nonkululeko Yolanda Tebeni
              </span>
            </span>
          </div>
          <div className="profile-details-role">
           
          <span className='primary-text'>
          
                        {" "}
                        <h1>
                            {" "}
                            <Typewriter
                  options={{
                  strings:[
                    "Enthusiastic Dev 😎",
                    
                    "Software Developer 💻",
                    
                    "Fullstack Developer💻",
                    
                    "Software Automation Tester🔴",
                    
                    "Quality Assurer  🌐",
                    
                  ],
                  delay: 150,
                  pauseFor: 1500,
                  autoStart: true,
                  loop: true,
                  stringSplitter: stringSplitter,
                }}
                />
                        </h1>
                        </span>
                  
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
          <button className='btn primary-btn'
                     onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        
                        >{" "}Hire Me{""}
                    </button>
            <a href="YolandaCV.pdf" download="YolandaCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
