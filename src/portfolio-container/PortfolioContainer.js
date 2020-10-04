import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'
import './PortfolioContainer.css'

export const PortfolioContainer = () => {

    const mapAllScreens = () => {
        return (
            TOTAL_SCREENS.map((screen) => (
               (screen.component) ? <screen.component key={screen.screen_name} /> : <div key={screen.screen_name} ></div>
            ))
        )
    }

    return (
        <div className="portfolio-container">
            { mapAllScreens() }
        </div>
    )
}
