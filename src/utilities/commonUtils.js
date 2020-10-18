import Home from '../portfolio-container/Home/Home';
import AboutMe from '../portfolio-container/AboutMe/AboutMe';
import Resume from '../portfolio-container/Resume/Resume';

/* TOTAL NUMBER OF SCREENS */
export const TOTAL_SCREENS = [
    { screen_name: "Home", component: Home },
    { screen_name: "About Me", component: AboutMe },
    { screen_name: "Resume", component: Resume },
    { screen_name: "Portfolio", component: null },
    { screen_name: "Contract", component: null }
];