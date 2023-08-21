import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService';
import Animations from "../../Utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
  
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };
  
    return (
      <div>
        <ScreenHeading
          title={"A Bit of My Project"}
          subHeading={"IT Related"}
        />
        <section className="project-section fade-in" id={props.id || ""}>
          <div className="container">
            <div className="row">
              <OwlCarousel
                className="owl-carousel"
                id="project-carousel"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-desc">
                      <p>
                        <i className="fa fa-quote-left" />
                        Developed a drive-thru application that allows the User to make an Oder , pay and got the receipt using VB.net, MS Access, and MySQL for the database.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>DRIVE-THRU APP</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Successfully developed the Qaqamba High School website using HTML, CSS, JavaScript, PHP, and SQL.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Qaqamba High School Website</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Developed the WSU website with student number generation, registration, and application features. 
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Walter Sisulu University Website</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Successfully Created a mobile voting system App that allows user to register and vote using Java with SQL for the database connection.
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Mobile Voting System Application</h5>
                      <p>IT Related</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Automated the Liberty Health Orbit System 
                        using various tools like Selenium WebDriver,and UFT with VBScript
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Automated Liberty Health Orbit System </h5>
                    
                        <p>IT Related</p>
                    
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="project-item">
                    <div className="project-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        Developed Responsive Website for Mzamomtsha High School using HTML,CSS,JavaScript (Bootstrap5).
                        <i className="fa fa-quote-right" />
                      </p>
                    </div>
                    <div className="project-info">
                      <h5>Mzamomtsha High School Website Project</h5>
                      <p>IT Related</p>

                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

      </div>
    );
  }