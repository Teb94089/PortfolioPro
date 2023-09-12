import React, {useState, useEffect} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import "./Resume.css";

import logoSrcE from '../Resume/education.png';
import logoSrcW from '../Resume/work-history.png';
import logoSrcP from '../Resume/programming.png';
import logoSrcA from '../Resume/programming.png';
import logoSrcPr from '../Resume/projects.png';
import logoSrcI from '../Resume/interests.png';
// Import other SVG files here



const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
   
    
    const resumeBullets = [
      { label: "Education", logoSrc: logoSrcE },
      { label: "Work History", logoSrc: logoSrcW },
      { label: "Programming Skills", logoSrc: logoSrcP },
      { label: "Application Skills", logoSrc: logoSrcA },
      { label: "Projects", logoSrc: logoSrcPr },
      { label: "Interests", logoSrc: logoSrcI },
    ];
  
  
  const programmingSkillsDetails = [
      { skill: "Python", ratingPercentage: 65 },
      { skill: "Java", ratingPercentage: 80 },
      { skill: "php", ratingPercentage: 65 },
      { skill: "JavaScript", ratingPercentage: 70 },
      { skill: "Node JS", ratingPercentage: 65 },
      { skill: "React JS", ratingPercentage: 65 },
      { skill: "HTML", ratingPercentage: 90 },
      { skill: "CSS", ratingPercentage: 90 },
      { skill: "C#", ratingPercentage: 50 },
      { skill: "VB.Net", ratingPercentage: 80 },
      { skill: "MySQL", ratingPercentage: 60 },
      { skill: "VBScript", ratingPercentage: 60 },
    ];
  
  const applicationSkillsDetails = [
      { skill: "Selenium", ratingPercentage: 90 },
      { skill: "UFT", ratingPercentage: 85 },
      { skill: "Jira", ratingPercentage: 75 },
      { skill: "JMeter", ratingPercentage: 55 },
      { skill: "Git", ratingPercentage: 80 },
      { skill: "ASP.NET", ratingPercentage: 65 },
      { skill: "Figma", ratingPercentage: 50 },
      { skill: "Agile Methodologies", ratingPercentage: 75 },
      { skill: "Eclipse", ratingPercentage: 75 },
      { skill: "Visual Studio", ratingPercentage: 55 },
      { skill: "VS Code", ratingPercentage: 80 },
      { skill: "Netbeans", ratingPercentage: 65 },
     
      
    ];

  const projectsDetails = [

    {
      title: "Online Portfolio",
      duration: { fromDate: "May", toDate: "June" },
      description:
        "To create an engaging and interactive showcase of my work. ",
      subHeading: "Technologies Use: React, and NodeJS",
    },
 
    {
      title: "Mzamomtsha School Project",
      duration: { fromDate: "Feb", toDate: "May" },
      description:
        "Serves as an informational hub and communication platform for school.",
      subHeading:
        "Technologies Used:HTML,CSS & JavaScript.",
      },
      {
        title: "Librty Health Orbit System Project",
        duration: { fromDate: "2021", toDate: "2023" },
        description:
          "Automating the system,ensuring high-quality.",
        subHeading:
          "Technologies Used: Selenium,and UFT",
      },
      /*{
        title: "Walter Sisulu University Website Project",
        duration: { fromDate: "2019", toDate: " 2019" },
        description:
          "The website with student number generation,and online application features.",
        subHeading:
          "Technologies Used: HTML, CSS, JavaScript,PHP, and SQL.",
        },*/
      
       
    ];

    
  const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Cape Peninsula University of Technology"}
          subHeading={"Advanced Diploma in ICT(Applications Development)"}
          fromDate={"2020"}
          toDate={"2020"}
        />
  
        <ResumeHeading
          heading={"Walter Sisulu University of Technology"}
          subHeading={"National Diploma in ICT(Software Development)"}
          fromDate={"2017"}
          toDate={"2019"}
        />


        <ResumeHeading
          heading={"Toleni Sinior Secondary School"}
          subHeading={"Matric"}
          fromDate={"2016"}
          toDate={"2016"}
        />

        <ResumeHeading
          heading={"Lwazi-lwethu computer Academy"}
          subHeading={"End user Computer"}
          fromDate={"2015"}
          toDate={"2015"}
      
        
        />
       
        
        
       
       
      </div>,

      /* WORK EXPERIENCE */


      <div className="resume-screen-container" key="work-experience">
          <div className='experience-container'>
          <ResumeHeading
          heading={"Yonglings"}
          subHeading={"Full Stack Developer"}
          fromDate={" July"}
          toDate={"Present"} />
        <div className="experience-description">
          <span className="resume-description-text">
          -Assist in web development for front-end and back-end components. </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"></span>
          <span className="resume-description-text"></span>
          <span className="resume-description-text"></span>
        </div>

        <ResumeHeading
          heading={"UVU Africa(CapaCiTi)"}
          subHeading={"Full Stack Developer"}
          fromDate={" Feb"}
          toDate={"July"} />
        <div className="experience-description">
          <span className="resume-description-text">
          -Assist in web development for front-end and back-end components. 
           
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          </span>
          
          <span className="resume-description-text"></span>
          <span className="resume-description-text">
          </span>
        </div>

        <ResumeHeading
          heading={"Liberty Limited Group"}
          subHeading={"Software Automation Tester"}
          fromDate={"2021"}
          toDate={"2023"} />
        <div className="experience-description">
          <span className="resume-description-text">
          Automating the system,ensuring efficient and high-quality.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"> </span>
          <span className="resume-description-text">  </span>
          <span className="resume-description-text"></span>
         
        </div>
      </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
        
      </div>,

      /* Application SKILLS */
      <div className="resume-screen-container application-skills-container" key="application-skills">
        {applicationSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
        
        
      </div>,

      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
        
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        
        <ResumeHeading
          heading="Creative Art"
          description="Like to dance."
        />
        <ResumeHeading
          heading="Entrepreneur"
          description="Build my own Software company."
        />
        
        
        <ResumeHeading
          heading="Investment"
          description="Started to invest in Forver Living Product, I am selling Forever Living product all the organic product."
        />
        
      </div>,
    ];

  const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

    const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
            

             <img src={bullet.logoSrc} alt={`${bullet.label} icon`} className="bullet-logo" />
        
      
        
          
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ))}
    ;

  const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
  return (
      <div className="resume-container screen-container fade-in" id={props.id || ""}>
          <div className="resume-content">
              <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
              <div className="resume-card">
                  <div className="resume-bullets">
                      <div className="bullet-container">
                          <div className="bullet-icons"></div>
                              <div className="bullets">{getBullets()}</div>
                      </div>
                  </div>
                  <div className="resume-bullet-details">{getResumeScreens()}</div>
              </div>
          </div>
      </div>
  );
};

export default Resume;
