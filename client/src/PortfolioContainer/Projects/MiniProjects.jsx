import {} from 'react'
import miniproj1 from "../Projects/public/img/miniProject1.png";
import miniproj2 from "../Projects/public/img/tax.png";
import miniproj3 from "../Projects/public/img/download.jpg";
import miniproj4 from "../Projects/public/img/images.jpg";
import miniproj5 from "../Projects/public/img/pro5.png";
import gitIco from "../Projects/public/img/githubIco.png";


export default function MiniProjects() {
  return (
    <div className="mini-projects-box">
      <div className="single-box">
        <img src={miniproj1} className="project-img" alt="project image" />
        <div className="project-description">
        I've created a chat app using ReactJS, Node.js, and Vite, implementing real-time communication with WebSockets.
          <a
            href="https://github.com/Teb94089/ChatApp"
            target="_blank" rel="noreferrer"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj3} className="project-img" alt="project image" />
        <div className="project-description">
        I've successfully developed a bank app using Python.
          <a href="https://github.com/Teb94089/BankApp" target="_blank" rel="noreferrer">
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj2} className="project-img" alt="project image" />
        <div className="project-description">
        I've successfully developed a tax calculator app using Java
          <a
          href="https://github.com/Teb94089/TaxCalculator"
            target="_blank" rel="noreferrer"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj4} className="project-img" alt="project image" />
        <div className="project-description">
        I've developed Mocha Mama's Cafe using VB.Net!
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
          A mobile voting Application using Java
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
