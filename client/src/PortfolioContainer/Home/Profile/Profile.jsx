// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTypewriter,Curse } from "react-simple-typewriter";
import Typewriter from "react-simple-typewriter"; // Make sure the import path is correct
import ScrollService from '../../../Utilities/ScrollService';
import "./Profile.css";

export default function Profile() {

    const {typeEffect}= useTypewriter({
      words:[ "Enthusiastic Dev 😎", "Full stack Developer 💻","Quality Assurer💻", "Cross Platform Dev 🔴", "React/React Native 🌐"],
      loop:{},
      typeSpeed:100,
      deleteSpeed:50
    })

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/mamkhiwa.mbalentle/">
                <i className="fa fa-facebook"></i>
              </a>

              <a href="https://www.instagram.com/ms_landa93/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/rodo_landa">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/nonkululeko-tebeni-938a86190/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCBXTZ6zYQ7dQO46poYqnU7w">
                <i className="fa fa-youtube"></i>
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
            <span> 
              {" "}
              <h1>
                {" "}
                {typeEffect}
          
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
