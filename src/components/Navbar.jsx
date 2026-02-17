import React from "react";
import './Navbar.css'
import logo_light from '../assets/switch.png'
import logo_dark from '../assets/switch (1).png'

const Navbar = () => {
    return(
        <div className="navbar">
            <img src="" alt="" className="logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Hobbies</li>
                <li>Contact</li>
            </ul>

            <img src={logo_dark} alt="" className="toggleicon"/>
        </div>
    )
}

export default Navbar