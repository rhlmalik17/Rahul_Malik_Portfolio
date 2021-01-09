import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import './Resume.css'

const Resume = () => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
   
    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
             <div className="heading-bullet"></div>
             <span>{(props.heading) ? props.heading : ''}</span>
             { (props.fromDate && props.toDate) ? <div className="heading-date">{ props.fromDate + '-' + props.toDate }</div> : <div></div> }
          </div>
          <div className="resume-sub-heading">
             <span>{(props.subHeading) ? props.subHeading : ''}</span>
          </div>
          <div className="resume-heading-description">
            <span>{(props.description) ? props.description : ''}</span>
          </div>
        </div>
      )
    }

    /* STATIC RESUME DATA */
    const resumeBullets = [ { label: "Education", logoSrc: 'education.svg' },
                            { label: "Work History", logoSrc: 'work-history.svg' },
                            { label: "Programming Skills", logoSrc: 'programming-skills.svg' },
                            { label: "Projects", logoSrc: 'projects.svg' },
                            { label: "Interests", logoSrc: 'interests.svg' } 
                        ];

   const programmingSkillsDetails = [ { skill: "HTML", ratingPercentage: 80 }, { skill: "CSS", ratingPercentage: 80 },
                                      { skill: "JavaScript", ratingPercentage: 75 }, { skill: "React JS", ratingPercentage: 75 },
                                      { skill: "Angular JS", ratingPercentage: 70 }, { skill: "Express JS", ratingPercentage: 70 },
                                      { skill: "Node JS", ratingPercentage: 70 }, { skill: "Firebase", ratingPercentage: 70 },
                                      { skill: "Core Java", ratingPercentage: 80 }];

  const projectsDetails = [ { title: 'Personal Portfolio Website', duration: { fromDate : '2020', toDate: '2020' }, description: 'A Personal Portfolio website to showcase all my details and projects at one place.', subHeading: 'Technologies Used: MERN STACK' },
                            { title: 'Converse', duration: { fromDate : '2020', toDate: '2020' }, description: 'A messaging platform utilizing the functionality of Sockets I/O through REST API to provide realtime messaging experience.', subHeading: 'Technologies Used: Angular JS, Express JS, Socket IO & FireBase Realtime Database.' },
                            { title: 'Zoom Clone', duration: { fromDate : '2020', toDate: '2020' }, description: "Developed Zoom alike project covering it's main key features including users having a live group video call session and basic realtime messaging.", subHeading: 'Technologies Used: Angular JS, Express JS, Socket IO & FireBase Realtime Database.' } ]

   const resumeDetails = [
    /* EDUCATION */ 
    (
      <div className="resume-screen-container" key="education">
        <ResumeHeading heading={'Chitkara University'} subHeading={'BACHELOR OF ENGINEERING, MAJOR IN COMPUTER SCIENCE'} fromDate={'2018'} toDate={'2021'} />
        <ResumeHeading heading={'Chandigarh College of Engineering & Technology'} subHeading={'DIPLOMA IN ELECTRONICS AND COMMUNICATION'} fromDate={'2015'} toDate={'2018'} />
        <ResumeHeading heading={'Shivalik Public School'} subHeading={'10th C.B.S.E'} fromDate={'2014'} toDate={'2015'} />
      </div>
    ),
    /* WORK EXPERIENCE */
    (
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading heading={'NovoInvent Private Limited'} subHeading={'FULL STACK DEVELOPER INTERN'} fromDate={'2020'} toDate={'Present'} />
          <div className="experience-description">
             <span className="resume-description-text">Currently working as Angular developer for Mayberry Investments, a stock trading web app platform live in Jamaica. Along with several tasks and responsibilities:-</span>
          </div>
          <div className="experience-description">
          <span className="resume-description-text">- Developed a customer portal for individual, director, joint holders and share holders in the application and developed dashboards to track investment history.</span><br/>
          <span className="resume-description-text">- Integrated the web app with backend services to create new user onboarding application with dynamic form content. </span><br/>
          <span className="resume-description-text">-  Collaborated with in-house web designers and developed UI as per the given designs.</span><br/>
          </div>
        </div>
      </div>
    ),
    /* PROGRAMMING SKILLS */
    (
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {
          (programmingSkillsDetails).map((skill,index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{ skill.skill }</span>
              <div className="skill-percentage">
                <div style={{ width: skill.ratingPercentage+"%" }} className="active-percentage-bar"></div>
              </div>
            </div>
          ))
        }
      </div>
    ),
    /* PROJECTS */
    (
      <div className="resume-screen-container" key="projects">
        {
          projectsDetails.map((projectsDetails,index) => (
            <ResumeHeading key={index} heading={projectsDetails.title} subHeading={projectsDetails.subHeading} description={projectsDetails.description}  fromDate={projectsDetails.duration.fromDate} toDate={projectsDetails.duration.toDate} />
          ))
        }
      </div>
    ),
    /* Interests */
    (
      <div className="resume-screen-container" key="interests">
        <ResumeHeading heading="Anime" description="Apart from being a tech enthusiast, i am a full time Otaku and loves to spend my free time exploring exciting anime and read manga." />
        <ResumeHeading heading="Music" description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on." />
        <ResumeHeading heading="Competitive Gaming" description="I like to challenge my reflexes a lot while competing in fps shooting games, pushing the rank and having interactive gaming sessions excites me the most." />
      </div>
    )
   ];

   const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
    }

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  }

    const getBullets = () => {
        return (
          resumeBullets.map((bullet,index) => (
            <div onClick={() => handleCarousal(index)} className={(index === selectedBulletIndex) ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="B"/>
                <span className="bullet-label">{ bullet.label }</span>
            </div>
          ))
        )
    }


    const getResumeScreens = () => {
      return (
      <div style={carousalOffsetStyle.style} className="resume-details-carousal">
        {
        resumeDetails.map((ResumeDetail) => (
          ResumeDetail          
        ))
        }
      </div>
       
      )
    }
    

    return (
        <div className="resume-container screen-container"> 

           <div className="resume-content">
           <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
           <div className="resume-card">
  
                <div className="resume-bullets">
                    <div className="bullet-container">
                      <div className="bullet-icons"></div>
                      <div className="bullets">
                       
                       { getBullets() }

                      </div>
                    </div>
                </div>

                <div className="resume-bullet-details">

                  {  getResumeScreens()  }

                </div>
           </div>
           </div>
        </div>
    )
}

export default Resume;
