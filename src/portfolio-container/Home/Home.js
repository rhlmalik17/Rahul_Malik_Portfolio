import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

function Home() {
    return (
        <div className="home-container screen-container">
            <Header />
            <Profile />
            <Footer /> 
        </div>
    )
}

export default Home;
