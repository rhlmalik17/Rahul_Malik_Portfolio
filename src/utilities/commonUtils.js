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

/* SCROLL TO HIRE ME / CONTACT ME SCREEN */
export const SCROLL_TO_HIRE_ME = () => {
    let contactMeScreen = document.getElementById('Contact Me');
    if(!contactMeScreen)
    return;

    contactMeScreen.scrollIntoView({ behavior: 'smooth' });
}

/* CHECK IF ELEMENT IS IN VIEW */
export const IS_ELEMENT_IN_VIEW = (elem) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elemBottom = rec.bottom;

    /* Partially Visible */
    let isVisible = elementTop < window.innerHeight && elemBottom >= 0;

    /* Completely Visible
        isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    */
    return isVisible;
}