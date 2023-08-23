import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./ContactMe.css";

export default function Contactme(props) {
  const stringSplitter = (string)=>{
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);

   }


  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };


  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/contact", data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep in Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <span>
            <h2 className='title'> 
            <Typewriter
                  options={{
                  strings:["Get In Touch"],
                  

                  delay: 150,
                  pauseFor: 1500,
                  autoStart: true,
                  loop: true,
                  stringSplitter: stringSplitter,
                }}
                />
            </h2>
          </span>


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
        <div className="back-form">
          <div className="img-back">
            <h4>
              Please, Send Your Message Here!
              <p></p>
              <img src={imgBack} alt="image is missing" />
            </h4>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
