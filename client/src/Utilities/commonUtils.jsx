import Home from '../PortfolioContainer/Home/Home';
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe'
<<<<<<< HEAD
=======
import Resume from '../PortfolioContainer/Resume/Resume'
import Testimonial from '../PortfolioContainer/Testimonial/Testimonial';
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe'
import Projects from '../PortfolioContainer/Projects/Projects'

>>>>>>> 01789f1726c68536e7fce96d20cd111b1fd96e45
export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
   
  
  
];


export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1;

    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }

    return -1;
};