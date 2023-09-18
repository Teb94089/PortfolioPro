import {} from 'react'
import miniproj1 from "../Projects/public/img/financial.png";
import miniproj2 from "../Projects/public/img/tax.png";
import miniproj3 from "../Projects/public/img/financial.png";
import miniproj4 from "../Projects/public/img/tax.png";
import miniproj5 from "../Projects/public/img/financial.png";
import gitIco from "../Projects/public/img/githubIco.png";


export default function MiniProjects() {
  return (
    <div className="mini-projects-box">
      <div className="single-box">
        <img src={miniproj1} className="project-img" alt="project image" />
        <div className="project-description">
          React application with Bootstrap styles and Firebase authentication
          <a
            href="https://github.com/Teb94089/MzamomtshaProject"
            target="_blank" rel="noreferrer"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj2} className="project-img" alt="project image" />
        <div className="project-description">
          Vanilla JS app that fetches and displays the current time and weather
          <a href="https://github.com/Teb94089/MzamomtshaProject" target="_blank" rel="noreferrer">
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj3} className="project-img" alt="project image" />
        <div className="project-description">
          React application with login, registration and dashboard component.
          <a
          href="https://github.com/Teb94089/MzamomtshaProject"
            target="_blank" rel="noreferrer"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj4} className="project-img" alt="project image" />
        <div className="project-description">
          Online store outline using HTML and CSS with no JavaScript. Contain
          dropdown menu, tables, forms and other HTML elements.
          <a
            href="https://github.com/Teb94089/MzamomtshaProject"
            target="_blank" rel="noreferrer"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj5} className="project-img" alt="project image" />
        <div className="project-description">
          A simple counter for learning Redux
          <a
            href="https://github.com/Teb94089/MzamomtshaProject"
            target="_blank" rel="noreferrer"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
