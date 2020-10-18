import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './Resume.css'

const Resume = () => {


    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    
    const resumeBullets = [ { label: "Education", logoSrc: 'education.svg' },
                            { label: "Work History", logoSrc: 'work-history.svg' },
                            { label: "Programming Skills", logoSrc: 'programming-skills.svg' },
                            { label: "Projects", logoSrc: 'projects.svg' },
                            { label: "Interests", logoSrc: 'interests.svg' } 
                        ]
    const getBullets = () => {
        return (
          resumeBullets.map((bullet,index) => (
            <div onClick={() => setSelectedBulletIndex(index)} className={(index === selectedBulletIndex) ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="B"/>
                <span className="bullet-label">{ bullet.label }</span>
            </div>
          ))
        )
    }

    return (
        <div className="resume-container"> 
           <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />

           <div className="resume-card">
           
                <div className="resume-bullets">
                    <div className="bullet-container">
                      <div className="bullets">
                       
                       { getBullets() }

                      </div>
                    </div>
                </div>

                <div className="resume-bullet-details">

                </div>
           </div>
        </div>
    )
}

export default Resume;
