import React, {useState, useEffect} from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import "./Resume.css";


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
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Application Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
  const programmingSkillsDetails = [
      { skill: "Python", ratingPercentage: 65 },
      { skill: "Java", ratingPercentage: 80 },
      { skill: "php", ratingPercentage: 65 },
      { skill: "JavaScript", ratingPercentage: 70 },
      { skill: "Node JS", ratingPercentage: 65 },
      { skill: "React JS", ratingPercentage: 65 },
      { skill: "Mongo Db", ratingPercentage: 75 },
      { skill: "SQL Server", ratingPercentage: 60 },
      { skill: "HTML", ratingPercentage: 90 },
      { skill: "CSS", ratingPercentage: 90 },
      { skill: "Django", ratingPercentage: 50 },
      { skill: "C#", ratingPercentage: 50 },
      { skill: "VB.Net", ratingPercentage: 80 },
      { skill: "MySQL", ratingPercentage: 60 },
      { skill: "Selenium Webdriver", ratingPercentage: 80 },
      { skill: "VBScript", ratingPercentage: 60 },
    ];
  
  const applicationSkillsDetails = [
      { skill: "Selenium", ratingPercentage: 90 },
      { skill: "UFT", ratingPercentage: 85 },
      { skill: "Jira", ratingPercentage: 75 },
      { skill: "TestNG", ratingPercentage: 60 },
      { skill: "Azure Repos", ratingPercentage: 50 },
      { skill: "CI/CD(Jenkins", ratingPercentage: 60 },
      { skill: "JMeter", ratingPercentage: 55 },
      { skill: "Git", ratingPercentage: 80 },
      { skill: "ASP.NET", ratingPercentage: 65 },
      { skill: "UX Design", ratingPercentage: 50 },
      { skill: "Agile Methodologies", ratingPercentage: 75 },
      
    ];

  const projectsDetails = [
    /*{
      title: "Mzamomtsha School Website Project",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "The comprehensive website showcases their proficiency in front-end and back-end technologies, resulting in an engaging and functional platform for the school.",
      subHeading:
        "Technologies Used:HTML, CSS, JavaScript and BootStrap5.",
      },
*/
    {
      title: "Mzamomtsha School Website Project",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "The comprehensive website showcases their proficiency in front-end and back-end technologies, resulting in an engaging and functional platform for the school.",
      subHeading:
        "Technologies Used:HTML, CSS, JavaScript and BootStrap5.",
      },
      {
        title: "Librty Health Orbit System  Project",
        duration: { fromDate: "2021", toDate: "2023" },
        description:
          "Automating the system,streamlining testing processes and ensuring efficient and high-quality results.",
        subHeading:
          "Technologies Used: Selenium WebDriver, Excel, JMeter,and UFT with VBScript,",
      },

      {
        title: "Mobile Voting System App Project",
        duration: { fromDate: "2020", toDate: "2020" },
        description:
          "The Systems offers a reliable and secure platform for conducting voting processes on mobile devices. ",
        subHeading: "Technologies Use: Java, and SQL",
      },

      {
        title: "Walter Sisulu University Website Project",
        duration: { fromDate: "2019", toDate: " 2019" },
        description:
          "The website with student number generation, registration, and online application features.",
        subHeading:
          "Technologies Used: HTML, CSS, JavaScript,PHP, and SQL.",
        },
      /*{
        title: "Developed DriveThru App Project",
        duration: { fromDate: "Feb 2018", toDate: "June 2018" },
        description:
          "The application streamlined the drive-thru process and enhanced efficiency by integrating various technologies.",
        subHeading: "Technologies Used:VB.net, MS Access, SQL ADO.Net.",
      },*/
      /*{
        title: "Qaqamba High Shool Website Project",
        duration: { fromDate: "July 2018", toDate: "Nov 2018" },
        description:
          "The comprehensive website showcases their proficiency in front-end and back-end technologies, resulting in an engaging and functional platform for the school.",
        subHeading:
          "Technologies Used: HTML, CSS, JavaScript,PHP, and SQL.",
      }, 
      */
      

        
        
       
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>,

      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
          <div className='experience-container'>
        <ResumeHeading
          heading={"UVU Africa(CapaCiTi Division)"}
          subHeading={"Full Stack Developer"}
          fromDate={"2023"}
          toDate={"Present"} />
        <div className="experience-description">
          <span className="resume-description-text">
          -Assist in web development for front-end and back-end components.
           Work with HTML, CSS, and JavaScript frameworks for user interface implementation.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          -Support server-side development using languages like Java, Python,and Node.js.
          </span>
          
          <span className="resume-description-text">
          
          </span>
          <span className="resume-description-text">
            Utilize version control systems like Git for code management.
          </span>
        </div>

        <ResumeHeading
          heading={"Liberty Limited Group(Health division)"}
          subHeading={"Software Automation Tester"}
          fromDate={"2021"}
          toDate={"2023"} />
        <div className="experience-description">
          <span className="resume-description-text">
          -Review requirements, specifications, and technical designdocuments to provide timely and meaningful feedback.

          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          -Create detailed, comprehensive and well-structured test plans and test cases.

          </span>
        
          <span className="resume-description-text">
              Design, develop and execute automation scripts using open source tools.
          </span>
          
          <span className="resume-description-text">

          </span>
          <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };
    

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
