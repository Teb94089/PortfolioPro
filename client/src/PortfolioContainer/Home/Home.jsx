
import React from "react";
import Header from "./Header/Header"
import  Nav from "./Nav/Nav";
import Profile from  "./Profile/Profile";
import Footer from "./Footer/Footer"
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Nav className="nav" />
      <Profile />
      <Footer/>
    </div>
  );
}

