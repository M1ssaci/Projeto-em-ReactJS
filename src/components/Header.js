import React from "react";
import './Header.css'
import VisualBliss from '../images/VisualBliss.png'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={VisualBliss} alt="VisualBliss"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://wallpapercave.com/wp/wp7464165.jpg" alt="User"/>
                </a>
            </div>
        </header>
    )
}