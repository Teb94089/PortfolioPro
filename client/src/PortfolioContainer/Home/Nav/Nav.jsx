import './Nav.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../../assets/header/logo.png";

export default function Nav() {
  return (
    <div className="nav-section">
      <div className="nav-container">
        <a href="#Home">
          <div className="nav-logo">
            <span>
              <img src={logo} alt="image not responding" />
            </span>
          </div>
        </a>
        <FontAwesomeIcon className="hamburger-menu " icon={faBars} />
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#AboutMe">About me</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#ContactMe">Contact</a>
          </li>
         
        </ul>
      </div>
    </div>
  );
}
