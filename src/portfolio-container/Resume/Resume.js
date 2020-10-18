import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './Resume.css'

const Resume = () => {
    return (
        <div className="resume-container"> 
           <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />

           <div className="resume-card">
                <div className="resume-bullets">

                </div>
                
           </div>
        </div>
    )
}

export default Resume;
