import React, { useState } from 'react';
import { TOTAL_SCREENS } from '../../../utilities/commonUtils';
import './Header.css';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    /* STATES TO BE USED */
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const getHeaderOptions = () => {
        return (
          TOTAL_SCREENS.map((Screen,i) => (
            <div key={Screen.screen_name} className={getHeaderOptionsClasses(i)}
                onClick={() => switchScreen(i,Screen)}
            >
                 <span>{Screen.screen_name}</span>
            </div>
          ))
        )
    }

    const getHeaderOptionsClasses = (index) => {
        let classes = "header-option ";
        if(index < TOTAL_SCREENS.length-1)
        classes+= "header-option-seperator ";

        if(selectedScreen === index)
        classes+= "selected-header-option ";
        
        return classes;
    }

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if(!screenComponent)
        return;

        screenComponent.scrollIntoView({ behavior: 'smooth' });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    }

    return (
        <div className="header-container">
            <div className="header-parent">
                <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
                </div>
                <div className="header-logo">
                    <span>RM.</span>
                </div>
                <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                    { getHeaderOptions() }
                </div>
            </div>
        </div>
    )
}

export default Header;
