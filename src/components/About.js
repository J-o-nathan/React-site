import React from 'react'
import BoxInfo from './partials/BoxInfo'
import Header from './partials/Header'


const About = () => {

    return (
        <div>
            <Header />
            <div className="body-container" id="about-container">
            <BoxInfo />
            </div>
        </div>
        
    )
}


export default About