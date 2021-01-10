import Home from '../portfolio-container/Home/Home';
import AboutMe from '../portfolio-container/AboutMe/AboutMe';
import Resume from '../portfolio-container/Resume/Resume';
import ContactMe from '../portfolio-container/ContactMe/ContactMe';

/* TOTAL NUMBER OF SCREENS */
export const TOTAL_SCREENS = [
    { screen_name: "Home", component: Home },
    { screen_name: "About Me", component: AboutMe },
    { screen_name: "Resume", component: Resume },
    // { screen_name: "Portfolio", component: null },
    { screen_name: "Contact Me", component: ContactMe }
];

/* GET SCREEN INDEX */
export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name)
    return -1;

    for(let i = 0;i < TOTAL_SCREENS.length;i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name)
        return i;
    }

    return -1;
}