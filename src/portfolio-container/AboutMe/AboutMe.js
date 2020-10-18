import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import './AboutMe.css';

const AboutMe = () => {
    
    const SCREEN_CONSTANTS = { 
        description: "Full stack developer with background knowledge of MEAN/MERN stacks along with a knack of building applications with utmost efficiency. Strong professional with a B.E willing to be an asset for an organization while aligning my interest to establish a career in IT and meet the Industry standards.",
        highlights: {
            bullets: [
                "Full Stack development",
                "Interactive Front End as per the design",
                "Building REST API",
                "Managing database"
           ],
           heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    return (
        <div className="about-me-container">
            <ScreenHeading title={'About Me'}/>
            <div className="about-me-card">
                <div className="about-me-profile">
                    <img alt="Profile Not found"/>
                </div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <button className="btn primary-btn"> Hire Me </button>
                         <button className="btn highlighted-btn"> Get Resume </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
