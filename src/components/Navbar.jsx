import React from "react";
import './Navbar.css'
import logo_dark from '../assets/switch (1).png'
import logo_light from '../assets/toggle-button.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        if (theme == 'light') {
            setTheme('dark')
        }
        else{
            setTheme('light');
        }
    }

    return(
        <div className="navbar">
            <h1 className="portfolio">Portfolio</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Hobbies</li>
                <li>Contact</li>
            </ul>

            <img onClick={()=>toggle_mode()} src={theme == 'light' ? logo_light : logo_dark} alt="" className="toggleicon"/>
        </div>
    )
}

export default Navbar