import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Testimonial.css'
import shape from "../../../src/img/Testimonial/shape-bg.png"

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
         loop: true,
         margin:0,
         nav: true,
         animateIn: "bounceInRight",
         animateOut: "bounceOutRight",
         dots: true,
         autoplay: true,
         smartSpeed: 1000,
         responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 1,
            },
            1000:{
                items:3,
            }

         }


    }
  
    return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I am pleased to provide a strong recommendation for Nonkululeko 
                        as a developer based on their good work during her time at WSU. 
                        Her passion for programming, remarkable problem-solving abilities, and dedication to continuous learning make them a valuable asset in any SD team.
                        I have no doubt they will continue to thrive in their future endeavors.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/Mrs-Mgo.jpg" alt="No internet connection">

                      </img>
                      <h5>Thumamina Gcanga</h5>
                      <p>Former Classmate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I have full confidence in recommending Nonkululeko based on their exceptional performance in software development during their diploma studies at the Walter Sisulu University (WSU). 
                        They consistently demonstrated a strong aptitude for programming and showcased a deep understanding of software development principles.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/sasi-Kumar.png" alt="No internet connection">

                      </img>
                      <h5> Mr V Sasikumar</h5>
                      <p>WSU-Lecturer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I strongly endorse Nonkululeko based on their exceptional performance in software development during their studies at CPUT.
                        They consistently demonstrated a strong aptitude for programming, a deep understanding of software development principles.
                        Their skills and growth in the field of software development were impressive.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/ps-Mgo.jpg" alt="No internet connection">

                      </img>
                      <h5> Mr D Makhurane</h5>
                      <p>CPUT Lecturer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I strongly endorse Nonkululeko for their outstanding performance as a Quality Assurer during their internship at Liberty Company. They consistently exhibited exceptional dedication and proficiency in their role, 
                        making a notable impact on the quality of our software products.
                        I'm certain they will continue to thrive in their future endeavors.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                    </ul>
                  </div>
                  <div className="client-info">
                      <img src="img/testimonial/mike.png" alt="No internet connection">

                      </img>
                      <h5>Mpho Thomas</h5>
                      <p>QA Lead</p>
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
