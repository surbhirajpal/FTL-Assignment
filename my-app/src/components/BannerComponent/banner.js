import React from 'react'
import Image from '../../Images/banner.jpg'
import './style.scss'

function Banner() {
    return (
        <div className="banner" style={{'backgroundImage': 'url(' + Image + ')'}}>
            <div className="overlay" />
            <div className="container">
                <div className="content">
                    <p className="title">FullThrottle Labs Assignment</p>
                    <p className="line" />
                </div>
            </div>
        </div>
    )
}

export default Banner;