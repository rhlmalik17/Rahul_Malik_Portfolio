import React from 'react'
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                  <div className="profile-details-name">
                      <span className="primary-text"> Hello, IM <span className="highlighted-text">Rahul Malik</span></span>
                  </div>
                  <div className="profile-details-role">
                      <span className="primary-text">Full Stack Developer</span>
                      <span className="profile-role-tagline">Knack of building applications with front and back end operations.</span>
                  </div>
                  <div className="profile-options">
                    <button className="btn primary-btn"> Hire Me </button>
                    <button className="btn highlighted-btn"> Get Resume </button>
                  </div>
                </div>
                <div className="profile-picture">
                    
                </div>
            </div>
        </div>
    )
}
export default Profile;