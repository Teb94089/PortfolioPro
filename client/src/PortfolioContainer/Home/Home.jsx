

import PropTypes from "prop-types";
import Profile from "./profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Profile />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  id: PropTypes.string, // Add the prop validation for 'id'
};

export default Home;
